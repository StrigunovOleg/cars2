import Image from "next/image";
import Button from "./Button";
import Button2 from "./Button2"

export default function Hero() {
  return (
    <>
      <section className=" relative w-full flex items-center justify-center bg-hero-background bg-no-repeat bg-cover bg-center h-screen">
        <div className="absolute w-full h-screen bg-black bg-opacity-50"></div>
        <div className="absolute top-1/3 xl:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-max">
        <h1 className='text-4xl font-bold text-gray-200'>АВТО<span className="text-4xl text-red-600"> ИЗ КИТАЯ </span> 
 С ДОСТАВКОЙ ПО РОССИИ</h1>
          <p className="mt-4 text-xl text-white">
            Подберем под Ваш бюджет, привезем в РФ, <br></br> растаможим, оформим
            документы и доставим до Вас
          </p>


          <div className="flex my-4 items-center">
                <div className="p-2 rounded-md border-2 border-white">
                    <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 455 455" xmlSpace="preserve">
                    <path d="M332.229,90.04l14.238-27.159l-26.57-13.93L305.67,76.087c-19.618-8.465-40.875-13.849-63.17-15.523V30h48.269V0H164.231v30
                        H212.5v30.563c-22.295,1.674-43.553,7.059-63.171,15.523L135.103,48.95l-26.57,13.93l14.239,27.16
                        C67.055,124.958,30,186.897,30,257.5C30,366.576,118.424,455,227.5,455S425,366.576,425,257.5
                        C425,186.896,387.944,124.958,332.229,90.04z M355,272.5H212.5V130h30v112.5H355V272.5z"/>
                    </svg>
                </div>
                <h2 className="text-2xl ml-2 text-white font-semibold">Доставка до Москвы за 4-8 недель</h2>
          </div>
          <div className="flex my-4 items-center">
                <div className="p-2 rounded-md border-2 border-white">
                
<svg fill="#ffffff" height="30px" width="30px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237.783 237.783" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 237.783 237.783">
  <g>
    <path d="m42.735,50.071h96.959c3.313,0 6,2.687 6,6s-2.687,6-6,6h-96.959c-3.313,0-6-2.687-6-6s2.686-6 6-6zm0,25.934h96.959c3.313,0 6,2.687 6,6s-2.687,6-6,6h-96.959c-3.313,0-6-2.687-6-6s2.686-6 6-6zm0,25.935h96.959c3.313,0 6,2.687 6,6s-2.687,6-6,6h-96.959c-3.313,0-6-2.687-6-6s2.686-6 6-6zm0,25.935h96.959c3.313,0 6,2.687 6,6s-2.687,6-6,6h-96.959c-3.313,0-6-2.687-6-6s2.686-6 6-6z"/>
    <path d="m42.735,62.071h96.959c3.313,0 6-2.687 6-6s-2.687-6-6-6h-96.959c-3.313,0-6,2.687-6,6s2.686,6 6,6z"/>
    <path d="m42.735,88.005h96.959c3.313,0 6-2.687 6-6s-2.687-6-6-6h-96.959c-3.313,0-6,2.687-6,6s2.686,6 6,6z"/>
    <path d="m42.735,113.94h96.959c3.313,0 6-2.687 6-6s-2.687-6-6-6h-96.959c-3.313,0-6,2.687-6,6s2.686,6 6,6z"/>
    <path d="m42.735,139.875h96.959c3.313,0 6-2.687 6-6s-2.687-6-6-6h-96.959c-3.313,0-6,2.687-6,6s2.686,6 6,6z"/>
    <path d="m237.783,98.361c0-1.591-0.632-3.117-1.757-4.243l-16.356-16.355c-1.125-1.125-2.651-1.757-4.243-1.757s-3.117,0.632-4.243,1.757l-28.756,28.756v-88.117c0-3.313-2.686-6-6-6h-170.428c-3.314,0-6,2.687-6,6v200.979c0,3.313 2.686,6 6,6h170.429c3.314,0 6-2.687 6-6v-63.18l53.597-53.597c1.125-1.125 1.757-2.651 1.757-4.243zm-225.783,115.02v-188.979h158.429v94.117l-35.291,35.291h-92.403c-3.313,0-6,2.687-6,6s2.687,6 6,6h80.403l-1.033,1.033c-0.777,0.777-1.326,1.753-1.586,2.821l-4.157,17.05h-25.148c-3.313,0-6,2.687-6,6s2.687,6 6,6c0,0 29.714,0 29.86,0 0.473,0 0.95-0.056 1.421-0.171l21.629-5.273c1.068-0.26 2.044-0.809 2.821-1.586l23.482-23.482v45.181h-158.427zm127.649-31.374l-10.408,2.538 2.538-10.408 83.648-83.648 7.871,7.871-83.649,83.647z"/>
  </g>
</svg>
                </div>
                <h2 className="text-2xl ml-2 text-white font-semibold">Работа по договору</h2>
          </div>
          <div className="flex my-4 items-center">
                <div className="p-2 rounded-md border-2 border-white">
                <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 490 490" xmlSpace="preserve">
<polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/>
</svg>
                </div>
                <h2 className="text-2xl ml-2 text-white font-semibold">Страховка на доставку</h2>
          </div>
          
        </div>
        <div className=" absolute  top-0  left-0 h-screen w-full flex-col flex items-center justify-end">
            <div className="flex flex-col md:flex-row items-center mb-8">
            <Button2 text="Расчитать стоимость" styles="w-70 h-20 text-xl my-5 bg-red-600 hover:bg-red-700"/>
          <Button text="Оставить заявку" styles="bg-cyan-500 text-xl w-52 h-20 hover:bg-cyan-700" />
          </div>
        </div>
      </section>
    </>
  );
}
