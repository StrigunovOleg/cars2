import Button2 from "./Button2";

export default function Contact() {




    return <>   
        <div className="flex mt-8 items-center  justify-center w-full min-h-fit">
            <div className=" relative bg-cover w-9/10 bg-center overflow-hidden  min-h-fit flex-col md:flex-row rounded-2xl flex items-center justify-around bg-contact-background ">
            <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
                <div className="w-full z-30 min-h-fit mt-10">
                    <h1 className="text-5xl mx-4 text-white">Пора сесть за автомобиль мечты</h1>
                    <div className="text-xl text-white">
                            <div className="w-3/4 mt-8">
                            <h3 className=" text-lg mx-4 text-slate-500">С нами вы получите</h3>
                            </div>
                            <div className=" text-2xl w-3/4 mx-4 my-4">
                            <h2>Бесплатные консультации</h2>
                            </div>
                            <div className=" text-2xl w-3/4 mx-4 my-4">
                            <h2>Большой выбор нового и авто со вторичного рынка</h2>
                            </div>
                            <div className="text-2xl w-3/4 mx-4 my-4">
                            <h2>Гарантию проведение сделки</h2>
                            </div>

                    </div>
                </div>
                <div className="w-250 z-30 my-5 xl:my-0 mr-2 h-400">
                    <Button2 text="Оставить заявку" styles="w-70 h-20 text-xl my-5 bg-red-600 hover:bg-red-700"/>
                </div>
            </div>


        </div>

    
    
    
    </>
}