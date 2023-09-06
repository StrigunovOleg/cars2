import Button from "./Button";

export default function Advantages() {
    const advantages = ["Цена дешевле чем у официальных диллеров", "Возможность выбора как нового авто так и со вторичного рынка", "Заключаем прозрачный юридический договор, гарантируем сохранность денежных средств", "Связь с клиентом 24/7", "Страховка на всех этапах доставки", "Доставка в любую точку страны"]

    return (
        <>
            <section className="w-full flex relative flex-col items-center justify-around bg-advantages-background bg-center overflow-hidden bg-cover">
            <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
            <div className="z-30">
                <h1 className="text-4xl my-4 z-30f font-bold text-white">Почему стоит <span className=" text-red-700">выбрать нас</span></h1>
                </div>

                <div className="w-3/4 my-4 grid md:grid-cols-3 ms:grid-cols-1 gap-6" style={{ minHeight: 400 }}>
                    {advantages.map((item, index) => (
                        <div key={index} className="flex text-white rounded-3xl  bg-black bg-opacity-60 border-2 items-center justify-center relative">
                            <svg className="absolute top-2 left-2" fill="#ffffff" width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>star-round</title>
<path d="M0 16q0-3.232 1.28-6.208t3.392-5.12 5.12-3.392 6.208-1.28q3.264 0 6.24 1.28t5.088 3.392 3.392 5.12 1.28 6.208q0 3.264-1.28 6.208t-3.392 5.12-5.12 3.424-6.208 1.248-6.208-1.248-5.12-3.424-3.392-5.12-1.28-6.208zM4 16q0 3.264 1.6 6.048t4.384 4.352 6.016 1.6 6.016-1.6 4.384-4.352 1.6-6.048-1.6-6.016-4.384-4.352-6.016-1.632-6.016 1.632-4.384 4.352-1.6 6.016zM6.496 12.928l6.56-0.96 2.944-5.952 2.944 5.952 6.56 0.96-4.768 4.64 1.152 6.528-5.888-3.072-5.888 3.072 1.152-6.528z"></path>
</svg>  
                            <div className="w-3/4">
                            <p className=" whitespace-normal my-2 text-xl">{item}</p>
                            </div>
                        </div>
                    ))}
    
                </div>
                <div className="my-4 z-30">
                <Button text="Оставить заявку" styles="w-70 h-20 text-xl" />
                </div>
            </section>
        </>
    );
}
