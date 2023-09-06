'use client'

import { useState } from "react";


export default function FaqSection() {


    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
        setActiveIndex(null);
        } else {
        setActiveIndex(index);
        }
    };

    const faqs = [
        {
          question: 'Как нам можно доверять и какие есть гарантии, что сделка состоится?',
          answer:
            'В начале сделки с заказчиком заключается прозрачный юридический договор. Перевод денежных средств за автомобиль производится на основании внешнеторгового контракта, договора купли – продажи непосредственно с продавцом автомобиля и инвойса. Эти документы и являются гарантом совершения сделки.',
        },
        {
          question: 'Официальную гарантию на автомобиль может выдавать только официальный представитель (дилер). Однако приобрести техническую гарантию на авто можно, например, в компании КАРСО.',
          answer:
            'Официальную гарантию на автомобиль может выдавать только официальный представитель (дилер). Мы даем 100% гарантию на перевозку на всех этапах.',
        },
        {
          question: 'Почему наша цена ниже цены у диллера?',
          answer:
            'У диллеров больше расходов на рекламу, персонал и на хранение авто, что приводит к завышенным ценнам. В то время как мы не храним авто на складе а доставляем его клиентам новым и как можно быстрее. Поэтому наши цены ниже.',
        },
        {
          question: 'Сколько стоят мои услуги?',
          answer: 'Стоимость услуг фиксированная и составляет 120 000 рублей. Оплата производится поэтапно по инфойсам. '
        },
        {
          question: 'Авто идет с мультимедиа на русском языке?',
          answer: 'К сожаление нет, авто приезжает из Китая с мультимедиа на английском либо китайском языках. Русская прошивка на мультимедиа устанавливается непосредственно в России за отдельную плату.'
        }
      ];
  
    return (
      <section id="FAQ">
      <h1 className="text-4xl font-bold h-600 text-center my-8">Часто задаваемые вопросы</h1>
        <div className="w-full my-10">
      <div className="w-3/4 flex flex-col transition-all items-center max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded mb-4 overflow-hidden w-full"
          >
            <button
              className="w-full px-4 py-3 text-left bg-gray-200 font-semibold flex items-center transition duration-300 ease-in-out"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-gray-700 flex-1">{faq.question}</span>
              <svg
                className={`w-6 h-6 ml-auto transform ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                } transition-transform duration-300 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="fill-current text-gray-500"
                  d="M16.5 11L12 15.5 7.5 11 6 12.5l6 6 6-6z"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 transition bg-gray-100">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
      </section>
    );
  };
  
  // ...
  