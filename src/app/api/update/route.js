'use server'

import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import getData from '../dbGet'
const fs = require('fs');

export async function POST(req) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: 'You are not logged in.', status: 401 })
  }
  
  const indexes = await req.json()

  
  let data = getData();
  let imagesToDelete = []

  if (indexes.length !== 0) {
    for (let i = 0; i < indexes.length; i ++) {

        imagesToDelete.push(...data[indexes[i]].images)
        imagesToDelete.push(data[indexes[i]].brand)
      
      
    }
  }

  console.log(imagesToDelete)

  for (let i = 0; i < imagesToDelete.length; i++) {
    
    fs.unlink(`C:/Users/Kirill/Desktop/projectCopy/upgrade-auto/public/${imagesToDelete[i]}`, (err) => {
      if (err) console.log(err);
    })
  }

  data = deleteObjectsByIndexes(data, indexes)

  fs.writeFileSync('./src/app/api/data.json', JSON.stringify(data));

  return NextResponse.json({ status: 200 })
}

function deleteObjectsByIndexes(array, indexesToDelete) {
  let newArray = array.filter((_, index) => !indexesToDelete.includes(index));
  if (newArray.length === 0) {
    newArray = [
          {
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
          }]
  }
  return newArray;
}




//   [
//     {
//       "brand": "Haval",
//       "name": "t9",
//       "details": ["bebra", "motor", "avto"],
//       "priceMarket": "10000",
//       "priceOur": "50000",
//       "brandLogo": "haval.webp",
//       "images": [
//         "morecars.png",
//         "logo.png",
//         "logo.png"
//       ]
//     },
//     {
//       "brand": "Havalnic",
//       "name": "t9",
//       "details": ["bebra", "motor", "avto"],
//       "priceMarket": "15000",
//       "priceOur": "50000",
//       "brandLogo": "haval.webp",
//       "images": [
//         "suvpicture.png",
//         "morecars.png",
//         "logo.png"
//       ]
//     },
//     {
//       "brand": "Bebravos",
//       "name": "k9",
//       "details": ["bebra", "bebra", "avto", "super", "bebra", "bebra", "avto", "super"],
//       "priceMarket": "15000",
//       "priceOur": "50000",
//       "brandLogo": "haval.webp",
//       "images": [
//         "suvpicture.png",
//         "logo.png",
//         "logo.png"
//       ]
//     }
//   ]
