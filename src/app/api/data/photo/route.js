import { NextResponse } from "next/server";

import getData from "../../dbGet";

export async function POST(req, res) {
    const data = await req.json()

    const index = data.index;
    const toReturn =  {
        "brand": "Geely",
        "name": "Monjaro",
        "details": ["2.0л бензин", "238 л.с.", "Расход 8.5л", "4WD"],
        "priceMarket": "5100000",
        "priceOur": "3590000",
        "brandLogo": "geely.svg",
        "images": [
          "photo_5222387951277820403_y.jpg",
          "photo_5222387951277820404_y.jpg",
          "photo_5222387951277820405_y.jpg",
          "photo_5222387951277820406_y.jpg",
          "photo_5222387951277820407_y.jpg"
          
        ]
      }
    return NextResponse.json(getData(index));
}