import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;

  if (method === "GET") {
    // return res.send("Prisma request User data");
    // prisma --> user table --> get method --> get data
    // return respond

    // const users = await prisma.user.findMany();
    const users = await prisma.user.findMany({
      // where: { isArchived: true },
      include: { posts: true },
    });
    return res.send(users);
  }
  
  else if (method === "POST") {
    // data validation
    // const payload = req.body;
    // const isValid = payload.name && payload.email;
    const { name, email } = req.body;
    const isValid = name && email;
    if (!isValid) return res.status(400).send("Bad Request");

    const user = await prisma.user.create({ data: { name, email } });
    // const user = await prisma.user.create({ data: payload });
    return res.send(user);
  }
  
  else if (method === "PUT") {
    const { id } = req.body;

    const updateUser = await prisma.user.update({
      data: { isArchived: true },
      where: { id },
    });

    return res.send(updateUser);
  }

  res.status(405).send("Invalid request method !"); // 405 method not allowed
};

export default handler;
