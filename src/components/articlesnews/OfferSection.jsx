import React from 'react'

// image: 
import speed from '../../assets/articles and news/Ellipse 39(4).svg'
import manager from '../../assets/articles and news/Ellipse 39(5).svg'
import figma from '../../assets/articles and news/Ellipse 39(6).svg'
import react from '../../assets/articles and news/Ellipse 39(3).svg'
import react2 from '../../assets/articles and news/Ellipse 39.svg'
import angular from '../../assets/articles and news/Ellipse 39(2).svg'
import figma2 from '../../assets/articles and news/Ellipse 39(1).svg'
import geernarrow from '../../assets/articles and news/Frame(5).svg'

import { NavLink } from 'react-router-dom'

const OfferSection = () => {
    const Offer =[
        {
            title:"مطالب پیشنهادی",
            desc:"این مطالب هم میتونه براتون جالب باشه",
            content:[
                {image:figma,subject:"چرا فیگما؟"},
                {image:manager,subject:"چگونه مدیر یک پروژه باشیم؟"},
                {image:speed,subject:"سرعت تکنولوژی در قرن 21"}
            ],
        },
        {
            title:"مطالب پیشنهادی",
            desc:"این مطالب هم میتونه براتون جالب باشه",
            content:[
                {image:react,subject:"شروع یاد گیری توسعه وب با ریکت"},
                {image:react,subject:"شروع یاد گیری توسعه وب با ریکت"},
                {image:react,subject:"شروع یاد گیری توسعه وب با ریکت"},             
            ],
        },
        {
            title:"مطالب پیشنهادی",
            desc:"این مطالب هم میتونه براتون جالب باشه",
            content:[
                {image:angular,subject:"چرا فیگما؟"},
                {image:figma2,subject:"سرعت تکنولوژی در قرن 21"},
                {image:react2,subject:"چگونه مدیر یک پروژه باشیم؟"}

            ],
        },
    ]

  return (
    <div className='relative col-span-1 pt-[47px]'>
        {
            Offer.map((data , index)=>(
                <div key={index} className='bg-white shadow rounded-xl my-8 p-4'>
                    <div className='text-center'>
                        <h3 className='text-lg font-medium text-teal-900 mb-2'>{data.title}</h3>
                        <p className='text-sm text-gray-400'>{data.desc}</p>
                    </div>
                    {data.content.map((item,key)=>(
                        <div key={key} className='relative flex flex-row my-4'>
                            <img src={item.image} className='z-[9999]'/>
                            <div className='absolute bg-gray-100 w-[90%] right-0 my-2 p-4 text-right shadow rounded-lg'>
                                <p className='text-xs font-medium text-teal-800 '>{item.subject}</p>
                                <NavLink to={"#"} className='text-[10px] text-teal-500 flex flex-row-reverse '>
                                    مشاهده مطالب <img src={geernarrow} />
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    
                   
                </div>
            ))
        }
        

        
        
    </div>
  )
}

export default OfferSection