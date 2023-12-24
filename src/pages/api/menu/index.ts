// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

interface Menu {
  id: number;
  name: string;
  price: number;
  assetUrl: string;
  isArchived: boolean;
}

let menus: Menu[] = []; // non-persistent data

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // console.log(req.body);
    // data validation
    const isValid = req.body.name;
    if (!isValid) return res.status(400).send("incomplete request");

    const newMenuId = menus.length === 0 ? 1 : menus[menus.length - 1].id + 1;
    const isArchived = false;
    const assetUrl =
      "https://www.thespruceeats.com/thmb/LkmDBEIDmQ4dsN-MH2SnAecwilE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg";

    // create new menu object
    const newMenu = {
      ...req.body,
      id: newMenuId,
      isArchived,
      assetUrl,
    };
    // menus.push(newMenu); // menus[] no longer used
    // prisma ---> db ---> write

    return res.send(menus);
  }
  
  else if (req.method === "GET") {
    // prisma ---> db ---> read
    return res.send(menus);
  } 
  
  else if (req.method === "DELETE") {
  }

  res.status(404).send("Invalid Method");
}
