import React from 'react'

const ListHeader = () => {
  const header=[
   "وضعیت پرداخت","قیمت (تومان)", "تاریخ شروع","مدرس دوره","نام دوره"
  ]
  return (
    <div>
     <ul className="flex gap-20 justify-end pr-28   border-darkgreen/80 dark:border-green list-none
      font-semibold text-[12px] text-darkgreen dark:text-white 
      ">
        {/* <li className='col-1 '></li> */}
        {header.map((title ,index)=>(
          <li key={index} className='col-1'>{title}</li>
        ))}
      
      </ul>

      

      
    </div>
  )
}

export default ListHeader