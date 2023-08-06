import { POST } from "@/components/post/dummy/Post";
import { NextApiRequest, NextApiResponse } from "next";

// Trong file pages/api/[postId].js
const postData = POST;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;

  if (!postId || postId !== postData.id.toString()) {
    return res
      .status(404)
      .json({ status: "error", message: "Bài viết không tồn tại", cause: "Nhu cut!" });
  }

  const post = postData.id;
  return res.status(200).json(postData);
}
