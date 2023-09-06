"use client"

import { useState } from "react";

import Carousel from "./Carousel"


export default function CarList(props) {
    const [cIndex, setCurrentIndex] = useState(0);


    return (
      <>
        <div className="9/10">
        <div className="flex xl:flex-row flex-col justify-right   xl:items-start my-4" style={{minHeight:400}}>
        <div className="flex-wrap xl:flexnowrap  flex xl:border-r-2 mr- xl:w-2/5 xl:flex-col xl:items-start  sm:mb-10 justify-around max-w-3/4 max-h-1/3">
          <div className="xl:overflow-y-scroll xl:h-96">
          {props.data.map((item, index) => (
            <div key={index} className="my-2" onClick={() => setCurrentIndex(index)}>
              <h2 className="text-xl hover:text-slate-700 font-semibold hover:cursor-pointer transition duration-300 ease-in-out" key={index}>
                {item.brand + " " + item.name}
              </h2>
            </div>
          ))}
          </div>
          <a href="https://t.me/upgrade_autovl">
            <h2 className="text-xl xl:mb-0 mb-5 mt-8 underline-offset-8 uppercase underline hover:text-slate-700 font-semibold hover:cursor-pointer transition duration-300 ease-in-out">
              Все модели
            </h2>
          </a>
        </div>

  
          <div className="w-full">
            <Carousel index={cIndex} />
          </div>
        </div>
        </div>
      </>
    );
  }