import { LIST_POST, POST } from "@/components/post/dummy/Post";
import { NextApiRequest, NextApiResponse } from "next";

// Trong file pages/api/[postId].js
const listPost = LIST_POST;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;

  const result = listPost.filter(e => postId === e.id.toString())[0];

  if (!result) {
    return res
      .status(404)
      .json({ status: "error", message: "Bài viết không tồn tại", cause: "Nhu cut!" });
  }

  // const post = postData.id;
  return res.status(200).json(result);
}
