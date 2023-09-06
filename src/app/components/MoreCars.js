import Button from "./Button";

export default function MoreCars() {

    const advantages = ["klfdsjaflksdjf", "fkldsjlfksj", "fkdslfks"]


    return <>   
        <div className="flex items-center justify-center w-full my-5" >
            <div className=" relative bg-cover rounded-2xl bg-center overflow-hidden flex flex-col md:flex-row items-center justify-around bg-moreCars-background" style={{width: 1000}}>
            <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
                <div className="z-30 mt-10 mx-5">
                    <h1 className="text-4xl text-white">Интересует авто со вторичного рынка?</h1>
                    <div className="text-xl text-white">
                            <div className=" mt-8 mb-5">
                            <h2>Оставьте заявку и наш специалист поможет подобрать авто по вашим параметрам</h2>
                            </div>

                    </div>
                </div>
                <div className="z-30 w-250 my-5 h-400 md:mr-5">
                    <Button text="Оставить заявку" styles="w-70 h-20 text-xl" />
                </div>
            </div>


        </div>

    
    
    
    </>
}