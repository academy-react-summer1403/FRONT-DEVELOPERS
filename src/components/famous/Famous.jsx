import React from 'react'
import GameImg from "../../assets/landing/game.png";
import PCImg from "../../assets/landing/pc.png";
import SecurityImg from "../../assets/landing/security.png";
import BarImg from "../../assets/landing/bar.png";
import BGImg from "../../assets/landing/BG.png";


const Famous = () => {
  return (
    
    
    <div className='flex-1 h-[500px]  mt-12 relative '>

        <div className='flex flex-col relative w-[300px] h-[50px] mx-auto mb-12 '>
        <div className='w-3 h-3 rounded-full bg-primary mx-auto absolute right-[0px] top-[10px]'></div>
      
        <h1 className='font-bold text-center text-black text-2xl '> محبوب ترین دسته بندی ها  </h1>
          <p className=' text-sm text-gray-400  text-center mt-5'>گستره وسیعی از محبوب ترین دوره ها</p>
          
        </div>
        <div className='flex-1   mx-auto  rounded-xl h-[400px] relative'>
        <img src={BGImg} alt=""  className=' w-full  h-full mx-auto'/>
        
        <div className='flex-1 justify-center items-center w-full absolute top-10'>
            <div className='w-[1100px] h-[300px] grid grid-cols-4  mx-auto pl-[75px] pt-[65px]'>
                <div className='w-[170px] h-[170px]   rotate-45 rounded-2xl bg-white shadow-inner shadow-gray-700'>
                <h1 className='w-[200px] h-[100px] -rotate-45 absolute  font-semibold text-gray-600 right-[1px] top-[23px] text-center leading-[70px]'>امنیت شبکه</h1>
                  <img src={SecurityImg} alt="" className='w-[160px] h-[150px] -rotate-45 pt-20 px-10 '/></div>
                <div className='w-[170px] h-[170px] bg-white shadow-inner shadow-gray-700 rotate-45 rounded-2xl'>
                <h1 className='w-[200px] h-[100px] -rotate-45 absolute  font-semibold text-gray-600 right-[1px] top-[23px] text-center leading-[70px]'>بازی سازی</h1>
                  <img src={GameImg} alt="" className='w-[160px] h-[150px] -rotate-45 pt-20 px-10 '/></div>
                <div className='w-[170px] h-[170px] bg-white shadow-inner shadow-gray-700 rotate-45 rounded-2xl'>
                <h1 className='w-[200px] h-[100px] -rotate-45 absolute  font-semibold text-gray-600 right-[1px] top-[23px] text-center leading-[70px]'>تحلیل داده</h1>
                  <img src={BarImg} alt="" className='w-[150px] h-[150px] -rotate-45 pt-20 px-10 '/></div>
                <div className='w-[170px] h-[170px] bg-white shadow-inner shadow-gray-700 rotate-45 rounded-2xl relative'>
                  <h1 className='w-[200px] h-[100px] -rotate-45 absolute  font-semibold text-gray-600 right-[1px] top-[23px] text-center'>طراحی
                  <br/>صفحات وب</h1>
                  <img src={PCImg} alt="" className='w-[150px] h-[150px] -rotate-45 pt-20 px-10 '/></div>
    
            </div>
        </div>
        
        </div>
 

    </div>

   

    
  

  )
}

export default Famous
