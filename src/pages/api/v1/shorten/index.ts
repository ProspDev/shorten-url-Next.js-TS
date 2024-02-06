import type { NextApiRequest, NextApiResponse } from "next";
// api utils
import { generateUniqueId } from "pages/api/utils/functions";
import redis from "pages/api/utils/redis";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === "POST") {
      const { url } = req.body;
      const uniqueId = generateUniqueId();

      await redis.set(uniqueId, url, { ex: 30 * 60 });
      res.status(201).json({ data: { id: uniqueId, url } });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (err) {
    console.log(err);
  }
}
