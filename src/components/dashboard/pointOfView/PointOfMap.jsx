import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { TbTrash } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const PointOfMap = () => {
    const item=[
        {
          id: 1,
          image: {},
          name: "jsدوره آموزش جامع",
          view: "دکتر محمد حسین بحرالعلومی",
          col: "بهار",
          startdate: "1401/06/09",
          setuation:"در انتظار تایید",
          price: "2,500,000",
        },
        {
            id: 2,
            image: {},
            name: "jsدوره آموزش جامع",
            view: "دکتر محمد حسین بحرالعلومی",
            col: "بهار",
            startdate: "1401/06/09",
            setuation:"در انتظار تایید",
            price: "2,500,000",
          },
          {
            id: 3,
            image: {},
            name: "jsدوره آموزش جامع",
            view: "دکتر محمد حسین بحرالعلومی",
            col: "بهار",
            startdate: "1401/06/09",
          setuation:"تاییدشده",
            price: "2,500,000",
          },
          {
            id: 4,
            image: {},
            name: "jsدوره آموزش جامع",
            view: "دکتر محمد حسین بحرالعلومی",
            col: "بهار",
            startdate: "1401/06/09",
          setuation:"در انتظار تایید",
            price: "2,500,000",
          },
         
      ]

  return (
    <div>
    {item.map((item) => (
        <ul key={item.id} style={{boxShadow:" 0px 1px 1px 0px rgba(0,0,0,0.1)"}}
        className={`relative grid grid-cols-6 my-2 rounded-md text-[10px] text-center 
          text-gray-600 font-medium justify-items-center 
        ${item.id % 2 ===0 ? "bg-gray-100/60 dark:bg-gray-50" : "bg-cyan-50/60 dark:bg-cyan-100/70"}                                          
        `}>
           <li className='col-1 my-2 flex gap-2'>
            <NavLink>
                <TbTrash className='text-secondary mt-4 w-5 h-5 cursor-pointer 
                
                ' />            
            </NavLink>
            <NavLink>
                <IoEyeOutline className='text-secondary mt-4 w-5 h-5 cursor-pointer 
                
                ' />            
            </NavLink>
            </li> 
            <li className='col-1 my-5'>{item.startdate}</li>
            <li className={`col-1 my-5 ${item.setuation === "تاییدشده" ? "text-emerald-400 dark:text-emerald-900" : "text-orange"} `}>{item.setuation}</li>
            <li className='col-1 my-5'>{item.view}</li>
            <li className='col-1 my-5'>{item.col}</li>
            <li className='col-1'>
                <img
                src={item.image}
                alt=""
                className='rounded-full border w-12 h-12 col-1 shadow-md my-1'
                ></img>
            </li>
         
        </ul>
      ))}
    </div>
  )
}

export default PointOfMap