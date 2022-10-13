// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const users: any[] = []

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {

    if (users.find((user) => user.email === req.body.email)) {
      return res.status(400).send("Email already registered!")
    }

    res.status(200).send(req.body)
    users.push(req.body)
  }

  if (req.method === "GET") {
    return res.status(200).send({data: users})
  }
}
