'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

export default function AdminAddCar() {
  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
    

    try {
      sendTheData(data)
    } catch (e) {
      console.log(e)
    }

    
  }




  return <>
  <div className="w-full border-b-2 border-black my-4"></div>
  <h1 className='text-center text-4xl font-bold '>Добавить машину</h1>
  <section className="w-full my-4 border-t-2 border-b-2 border-black ">
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col border-black items-center justify-around" action="">
    <label htmlFor="brand">Бренд</label>
    <input id="brand" className="py-2 border-black w-1/3 my-2 px-2 rounded-md border-2" {...register("brand", { required: "Это поле обязательное" })} type="text" placeholder="Бренд" />
    <label htmlFor="name">Название</label>
    <input id="name" className="py-2 w-1/3 border-black my-2 px-2 rounded-md border-2" {...register("name", { required: "Это поле обязательное" })} type="text" placeholder="Название" />
    <label htmlFor="details">Детали</label>
    <input id="details" className="py-2 w-1/3 border-black my-2 px-2 rounded-md border-2" {...register("details", { required: "Это поле обязательное" })} type="text" placeholder="Детали" />
    <label htmlFor="marketPrice">Цена у дилеров</label>
    <input id="marketPrice" className="py-2 w-1/3 my-2 px-2 border-black rounded-md border-2" {...register("priceMarket", { required: "Это поле обязательное" })} type="text" placeholder="Цена у дилеров" />
    <label htmlFor="ourPrice">Наша цена</label>
    <input id="ourPrice" className="py-2 w-1/3 my-2 px-2 border-black rounded-md border-2" {...register("priceOur", { required: "Это поле обязательное" })} type="text" placeholder="Наша цена" />
    <label htmlFor="brandImage">Бренд</label>
    <input id="brandImage" className="py-2 w-1/3 my-2 px-2 border-black rounded-md border-2" {...register("brandLogo", { required: "Это поле обязательное" })} type="text" placeholder="Бренд" />
    <label htmlFor="0">Изображения авто</label>
    <input id="images" className="py-2 h-36 w-1/3 my-2 px-2 border-black rounded-md border-2" {...register("images", { required: "Это поле обязательное" })} type="text" placeholder="Бренд" />
    <input className="py-2 my-2 hover:cursor-pointer px-8 rounded-md border-2" type="submit" />
</form>

    </section>
  </>
}


async function sendTheData(data) {
  const response = await fetch("http://localhost:3000/api/add", {
      method: "POST",

      body: JSON.stringify(data)
      
  })
  return response
}

// {
//   "brand": "Geely",
//   "name": "Monjaro",
//   "details": ["2.0л бензин", "238 л.с.", "Расход 8.5л", "4WD"],
//   "priceMarket": "5100000",
//   "priceOur": "3590000",
//   "brandLogo": "geely.svg",
//   "images": [
//     "photo_5222387951277820403_y.jpg",
//     "photo_5222387951277820404_y.jpg",
//     "photo_5222387951277820405_y.jpg",
//     "photo_5222387951277820406_y.jpg",
//     "photo_5222387951277820407_y.jpg"
    
//   ]
// }



