import React from 'react'

const ListHeader = () => {
  const header=[
    "نام دوره","مدرس دوره","تاریخ شروع","قیمت (تومان)"
  ]
  return (
    <div>
      <ul className="flex flex-row-reverse gap-20 px-28 border-b-2 border-teal-700 font-medium text-md py-2 
      
      max-md:gap-10
      ">
        {header.map((title ,index)=>(
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListHeader