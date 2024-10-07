import React from 'react'
import GameImg from "../../assets/landing/game.png";
import PCImg from "../../assets/landing/pc.png";
import SecurityImg from "../../assets/landing/security.png";
import BarImg from "../../assets/landing/bar.png";
import BGImg from "../../assets/landing/BG.png";


const Famous = () => {
  return (
    
    
    <div className='flex-1 h-[500px]  mt-12 relative '>

        <div className='flex flex-col relative w-[380px] h-[50px] mx-auto mb-12'>

          <div className='w-3 h-3 rounded-full bg-primary absolute right-[0px] top-[20px]'></div>
        
          <h1 className='font-bold text-center text-black text-[30px] dark:text-white'> محبوب ترین دسته بندی ها  </h1>
          <p className=' text-sm text-gray-400  text-center mt-5'>گستره وسیعی از محبوب ترین دوره ها</p>
          
        </div>

        <div className='flex-1   mx-auto  rounded-xl h-[400px] relative max-lg:h-[600px] max-md:h-[600px]'>
          <img src={BGImg} alt=""  className=' w-full  h-full mx-auto'/>
          
          <div className='flex-1 justify-center items-center w-full absolute top-10'>
              <div className='w-[1100px] h-[300px] grid grid-cols-4  mx-auto pl-[55px] pt-[65px] 
                max-lg:grid-cols-2 max-lg:px-[250px] max-lg:h-[550px] max-lg:mx-auto gap-6  max-sm:gap-0
                max-md:grid-cols-2 max-md:h-[500px]  max-md:-ml-[100px] max-sm:-ml-[160px]'
              >
                <div className='w-[180px] h-[180px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[130px]
                 max-sm:h-[130px] rotate-45 rounded-2xl bg-white shadow-inner shadow-gray-700 hover:bg-gradient-to-tl from-orange from-40% to-amber-300 
                  transition-colors z-50 hover:shadow-md hover:shadow-gray-400'
                >
                  <h1 className='w-[200px] h-[100px] -rotate-45 absolute  font-semibold text-gray-600 right-[1px] top-[23px] text-center leading-[70px]
                  max-md:-mr-[15px] max-sm:-mr-[35px] hover:text-white z-50'>امنیت شبکه</h1>
                    <img src={SecurityImg} alt="" className='w-[160px] h-[150px] -rotate-45 pt-20 px-10 max-sm:h-[130px]'/>
                </div>

                <div className='w-[180px] h-[180px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[130px]
                 max-sm:h-[130px] rotate-45 rounded-2xl bg-white shadow-inner shadow-gray-700 hover:bg-gradient-to-tl from-orange from-40% to-amber-300 
                  transition-colors z-50 hover:shadow-md hover:shadow-gray-400'
                >
                  <h1 className='w-[200px] h-[100px] -rotate-45 absolute  font-semibold text-gray-600 right-[1px] top-[23px]
                  max-md:-mr-[15px] text-center leading-[70px] hover:text-white z-50 max-sm:-mr-[35px]'>بازی سازی</h1>
                  <img src={GameImg} alt="" className='w-[160px] h-[150px] -rotate-45 pt-20 px-10  max-sm:h-[130px]'/>
                </div>

                <div className='w-[180px] h-[180px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[130px]
                 max-sm:h-[130px] rotate-45 rounded-2xl bg-white shadow-inner shadow-gray-700 hover:bg-gradient-to-tl from-orange from-40% to-amber-300 
                  transition-colors z-50 hover:shadow-md hover:shadow-gray-400'
                >
                  <h1 className='w-[200px] h-[100px] -rotate-45 absolute  font-semibold text-gray-600 right-[1px] top-[23px]
                  max-md:-mr-[15px] text-center leading-[70px] hover:text-white z-50 max-sm:-mr-[35px]'>تحلیل داده</h1>
                  <img src={BarImg} alt="" className='w-[150px] h-[150px] -rotate-45 pt-20 px-10 max-sm:h-[130px]'/>
                </div>

                <div className='w-[180px] h-[180px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[130px]
                 max-sm:h-[130px] rotate-45 rounded-2xl bg-white shadow-inner shadow-gray-700 hover:bg-gradient-to-tl from-orange from-40% to-amber-300 
                  transition-colors z-50 hover:shadow-md hover:shadow-gray-400'
                >                    
                  <h1 className='w-[200px] h-[100px] -rotate-45 absolute  font-semibold text-gray-600 right-[1px] top-[23px]
                    max-md:-mr-[15px] text-center hover:text-white z-50 max-sm:-mr-[35px]'>طراحی
                    <br/>صفحات وب</h1>
                    <img src={PCImg} alt="" className='w-[150px] h-[150px] -rotate-45 pt-20 px-10 max-sm:h-[130px]'/>
                </div>
      
              </div>
          </div>
        
        </div>
 

    </div>

   

    
  

  )
}

export default Famous
