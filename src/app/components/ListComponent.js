export default function ListComponent() {

    const steps = ["Заявка на проведение работ", 
    "Подбор, поиск авто в Китае",
    "Заключение договора с нами на оказание агентских (посреднических) услуг по доставке авто",
    
    "Покупка авто напрямую у китайского диллера (на основании инвойса и внешнеторгового контракта)",
    "Оформление экспортных документов на автомобиль",
    "Оформление ввозных таможенных документов на авто ( подача таможенной декларации, оплата таможенных платежей)",
    "Прохождение лаборатории для оформления СБКТС И ЭПТС",
    "Доставка авто в ваш город"
    ]


    return <>
        <section id="steps" className="flex items-center justify-center">
        <div  className="w-full mt-6 flex align-top justify-around" style={{maxWidth: 1400}}>
            <div className=" relative w-1/4 md:inline-block hidden">
            
                <img src="/zeekr00101.jpeg" alt="image" className=" object-cover z-10 rounded-2xl w-full h-full overflow-hidden" />
                <div className="top-0 left-0 w-full h-full rounded-2xl absolute bg-black bg-opacity-50"></div>
            </div>
            <div className="text-xl text-left w-3/4 md:w-1/2">
            <h1 className="text-4xl font-bold mb-8">Этапы привоза авто из Китая</h1>
            <div className="space-y-3">
  {steps.map((item, index) => (
    <div key={index} className="border-b">
      <div className="flex items-center">
        <p className="text-4xl font-bold text-cyan-600 mr-4">{index + 1}</p>
        <p className="text-xl">{item}</p>
      </div>
    </div>
  ))}
</div>
</div>
        </div>
    
        </section>
    </>
}