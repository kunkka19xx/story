// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { POST } from "@/components/post/dummy/Post";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  content: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  POST.title = req.body.title;
  res.status(201).json(req.body);
}
