import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const ListMap = () => {
    const item=[
        {
          id: 1,
          image: {},
          name: "jsدوره آموزش جامع",
          teacher: " بحرالعلومی",
          termname: "بهار",
          startdate: "1401/06/09",
          price: "2,500,000",
        },
        {
            id: 2,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 3,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 4,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 5,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 6,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 7,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
          {
            id: 8,
            image: {},
            name: "jsدوره آموزش جامع",
            teacher: "دکتر محمد حسین بحرالعلومی",
            termname: "بهار",
            startdate: "1401/06/09",
            price: "2,500,000",
          },
      ]

  return (
    <div>
          {item.map((item) => (
              <ul key={item.id} style={{boxShadow:" 0px 1px 1px 0px rgba(0,0,0,0.1)"}}
              className={`relative grid grid-cols-6 my-2 rounded-md text-[11px] text-center 
                text-gray-600 font-medium justify-items-center 
              ${item.id % 2 ===0 ? "bg-gray-100/60 dark:bg-gray-50" : "bg-cyan-50/60 dark:bg-cyan-100/70"}                                          
              `}>
                <NavLink className='col-1'>
                  <IoEyeOutline className='text-orange mt-4 w-5 h-5 cursor-pointer 
                  max-md:mt-2 max-md:ml-2
                  ' />            
                </NavLink>
                <li className='col-1 my-5'>{item.price}</li>
                <li className='col-1 my-5'>{item.startdate}</li>
                <li className='col-1 my-5'>{item.teacher}</li>
                <li className='col-1 my-5'>{item.name}</li>
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

export default ListMap