import React from 'react'

import BGImg from "../../assets/landing/BG.png";


const Famous = () => {
  return (
    
    <>
    <div className='flex-1  h-[500px]  mt-12 '>

   

        <div className='flex flex-col relative w-[300px] h-[300px] mx-auto'>
        <div className='w-3 h-3 rounded-full bg-primary mx-auto absolute right-[0px] top-[10px]'></div>
      
        <h1 className='font-bold text-center text-black text-2xl '> محبوب ترین دسته بندی ها  </h1>
          <p className=' text-sm text-gray-400  text-center mt-5'>گستره وسیعی از محبوب ترین دوره ها</p>
        </div>

        <img src={BGImg} alt=""  className='py-30  h-[400px] w-full absolute top-[900px]'/>


        <div className='w-[700px] h-[300px] '></div>


    </div>

    {/* <div className='grid grid-cols-2  bg-primary '>
    <img src={BGImg} alt="" />
    </div> */}

    
    </>

  )
}

export default Famous
