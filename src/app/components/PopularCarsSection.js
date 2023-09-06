

import CarList from "./CarList";

async function PopularCarsSection() {
    const data = await getData();


    return <>
    <section id="popcars">
    <h1 className="text-4xl font-bold h-600 text-center my-8">Клиенты чаще всего выбирают</h1>
        <div className="w-full flex items-center justify-center">
            <CarList data={data}/>
        </div>
    
    
        </section>
    </>
}

async function getData() {
    const res = await fetch('http://localhost:3000/api/data/all', {next: {revalidate: 1}});
    return res.json()
}

export default PopularCarsSection;