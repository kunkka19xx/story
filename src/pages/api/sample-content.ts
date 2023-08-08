// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { LIST_POST } from "@/components/post/dummy/Post";
import { PostContent } from "@/model/PostModel";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  listPost: PostContent[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    listPost:LIST_POST
  });
}
