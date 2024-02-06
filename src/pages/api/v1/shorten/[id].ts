import type { NextApiRequest, NextApiResponse } from "next";
// api utils
import redis from "pages/api/utils/redis";

type Data = {
  data?: any;
  message?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === "GET") {
      const { id } = req.query;

      const url = await redis.get(id as string);
      if (!url) {
        throw new Error("Id expired or invalid id");
      }
      // reset expire time
      await redis.set(id as string, url, { ex: 30 * 60 });

      res.status(201).json({ data: { url } });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
}
