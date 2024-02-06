// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ data: { greeting: "Hello Shorten-URL!" } });
  } else if (req.method === "POST") {
    res.status(200).json({ data: { message: req.body } });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
