import { LIST_POST } from "@/components/post/dummy/Post";
import { NextApiRequest, NextApiResponse } from "next";

// Trong file pages/api/[postId].js
const listPost = LIST_POST;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tag } = req.query;
  var result;
  if (tag) result = listPost.filter((e) => e.tags.includes(tag.toString()));
  else result = listPost;
  if (result.length===0) {
    return res.status(404).json({
      status: "error",
      message: "Bài viết không tồn tại",
      cause: "Tag ban chon khong co bai viet tuong ung!",
    });
  }

  // const post = postData.id;
  return res.status(200).json(result);
}
