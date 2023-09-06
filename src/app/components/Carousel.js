"use client"
import Image from "next/image";
import Button from "./Button";
import Button2 from "./Button2";
import { useState,useEffect } from "react";
import { resolve } from "styled-jsx/css";
import { get } from "react-hook-form";

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState(
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
    }
  );

    
  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("http://localhost:3000/api/data/photo", {
          method: "POST",
          body: JSON.stringify({index: props.index}),
          next: {revalidate: 240}
          })
        const newData = await response.json()
        setData(newData)
      }
      fetchData()
  }, [props])



  



  const goPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === data.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const name = data.brand + " " + data.name;
  const details = data.details.join(" | ");

  function formatNumberWithSpaces(number) {
    // Use toLocaleString with options to format the number
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  //

  return (

    <>
      <div className="flex flex-col xl:flex-row xl:items-start items-center justify-between max-w-screen-md mx-auto">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="text-left w-3/4">
              <h1 className="uppercase text-4xl font-semibold">{name}</h1>
              <h2 className="text-xl my-4">{details}</h2>
            </div>
            <div className="w-1/4">
              <Image src={`/${data.brandLogo}`} width={110} height={110} alt="Brand logo" />
            </div>
          </div>
          <div className=" w-full md:w-full h-60 md:h-80">
          <div className="h-full relative w-full bg-no-repeat bg-cover">
            <img src={`http://localhost:3000/${data.images[currentIndex]}`} alt="car image" className="w-full h-full absolute object-contain bg-no-repeat bg-cover top-0 left-0" />
            <div className="z-25 hover:bg-slate-200 transition-colors pl-1 pr-2 py-1 rounded-full bg-white absolute left-2 top-1/2 -translate-y-1/2" onClick={goPrev}>
              <svg className="" width="25px" height="25px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" />
              </svg>
            </div>
            
            <div className="z-25 hover:bg-slate-200 transition-colors absolute pl-2 pr-1 py-1 rounded-full bg-white top-1/2 right-2 -translate-y-1/2" onClick={goNext}>
              <svg className="" width="25px" height="25px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" />
              </svg>
            </div>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 xl:ml-8 xl:w-1/3">
          <h2 className="text-md font-semibold">Цена у официальных дилеров:</h2>
          <h1 className="text-xl font-semibold">{formatNumberWithSpaces(data.priceMarket)} руб.</h1>
          <h2 className="text-2xl mt-2">Наша цена:</h2>
          <h1 className="text-2xl font-bold mb-2">{formatNumberWithSpaces(data.priceOur)} руб.</h1>
          <h2 className="text-2xl">Выгода:</h2>
          <h1 className="text-2xl text-red-600 font-semibold pb-6">{formatNumberWithSpaces("" +(parseInt(data.priceMarket) - parseInt(data.priceOur)))} руб.</h1>
          <div className="-ml-2">
          <Button2 text="Расчитать стоимость" styles="w-70 h-20 text-xl my-5 bg-red-600 hover:bg-red-700"/>
          <Button text="Оставить заявку" styles="w-70 h-20 text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

