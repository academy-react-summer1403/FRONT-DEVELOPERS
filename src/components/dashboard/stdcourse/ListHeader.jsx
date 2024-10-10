import React from 'react'

const ListHeader = () => {
  const header=[
   "قیمت (تومان)", "تاریخ شروع","مدرس دوره","نام دوره"
  ]
  return (
    <div>
      <ul className="grid grid-cols-6 border-b-2 border-teal-700 dark:border-teal-500 list-none
      font-semibold text-[12px] text-teal-900 dark:text-white justify-items-center pb-2
      ">
        <li className='col-1 '></li>
        {header.map((title ,index)=>(
          <li key={index} className='col-1'>{title}</li>
        ))}
      
      <li className='col-1'></li>
      </ul>
    </div>
  )
}

export default ListHeader