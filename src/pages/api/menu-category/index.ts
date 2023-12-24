// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

interface MenuCategory {
  id: number;
  name: string;
  isAvailable: boolean;
  isArchived: boolean;
}

const menuCategories: MenuCategory[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // data validation
    const isValid = req.body.name;
    if (!isValid)
      return res
        .status(400)
        .send("Incomplete Request. Missing required fields.");

    const newMenuCategoryId =
      menuCategories.length === 0
        ? 1
        : menuCategories[menuCategories.length - 1].id + 1;
    const isArchived = false;

    const newMenuCategory = {
      ...req.body,
      // isAvailable: req.body.isAvailable ? req.body.isAvailable : true,
      id: newMenuCategoryId,
      isArchived,
    };
    
    menuCategories.push(newMenuCategory);
    return res.send(menuCategories);
  } 

  else if (req.method === "GET") {
    return res.send(menuCategories);
  }

  return res.status(405).send("Invalid Method");
}
