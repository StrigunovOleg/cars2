'use client'

import { useState } from "react"
import { useForm, formState } from "react-hook-form"

export default function Button(props) {

    const [open, setOpen] = useState(false)

    const {register, handleSubmit, formState: {errors}} = useForm({
    });

    const handleClick = () => {
        setOpen(open ? false : true)
    }

    const additionalStyle = props.styles;

    

    return <>
        <div className={`flex w-max gap-4`} >
        <button onClick={handleClick} className={`  transition-colors text-white font-bold py-2 px-4 rounded ml-2  ${additionalStyle}`}>
        {props.text}
    </button>
    </div>
    
    {open ? <>
    <div className="fixed z-35 w-full h-full bg-black opacity-50 top-0 left-0"></div>
    <div className="fixed z-50 opa rounded-3xl flex flex-col items-center justify-around bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-red-700" style={{width : 350, height: 580}}>
        <div onClick={handleClick} className=" cursor-pointer absolute right-4 top-4">
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 width="15px" height="15px" viewBox="0 0 94.926 94.926"
	 xmlSpace="preserve">
<g>
	<path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"/>
</g>
</svg>
        </div>
        <h1 className="text-xl text-center font-semibold">Бесплатно рассчитаем <br /> стоимость</h1>
        <form onSubmit={handleSubmit((data) => {
            sendTheData(data)
            handleClick()
        })} className="flex flex-col items-center justify-around" style={{height: 450}} action="">
            <input className="py-2 px-2 rounded-md border-2" {...register("name", {required: "Это поле обязательное",
            minLength: {
                value: 1,
                message: "Это поле обязательное"
            }
        })} type="text" placeholder="Ваше имя" />
            <p>{errors.name?.message}</p>
            <input className="py-2 px-2 rounded-md border-2" {...register("phone", {required: "Это поле обязательное",
            minLength: {
                value: 1,
                message: "Это поле обязательное"
            }
        })} type="text" placeholder="Ваш телефон" />
        <p>{errors.phone?.message}</p>




        <input className="py-2 px-2 rounded-md border-2" {...register("budget", {required: "Это поле обязательное",
            minLength: {
                value: 1,
                message: "Это поле обязательное"
            }
        })} type="text" placeholder="Ваш бюджет" />
        <p>{errors.phone?.message}</p>

        <input className="py-2 px-2 rounded-md border-2" {...register("brand", {required: "Это поле обязательное",
            minLength: {
                value: 1,
                message: "Это поле обязательное"
            }
        })} type="text" placeholder="Марка авто" />
        <p>{errors.phone?.message}</p>

        <input className="py-2 px-2 rounded-md border-2" {...register("specs", {required: "Это поле обязательное",
            minLength: {
                value: 1,
                message: "Это поле обязательное"
            }
        })} type="text" placeholder="Комплектация" />
        <p>{errors.phone?.message}</p>

        <input className="py-2 px-2 rounded-md border-2" {...register("year", {required: "Это поле обязательное",
            minLength: {
                value: 1,
                message: "Это поле обязательное"
            }
        })} type="text" placeholder="Год производства" />
        <p>{errors.phone?.message}</p>

            <input type="submit" value="Отправить" className=" cursor-pointer px-10 py-2 rounded-lg bg-slate-300" />
            
        </form>
    </div>
    </>
     : <div style={{display: `none`}}></div>
    }
    
    
    </>
}

async function sendTheData(data) {
    console.log(data)
    const response = await fetch("http://localhost:3000/api/send", {
        method: "POST",
        
        body: JSON.stringify(data)
        
    })
}