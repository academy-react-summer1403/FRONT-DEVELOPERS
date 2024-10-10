import React from 'react'
import GameImg from "../../assets/landing/game.png";
import PCImg from "../../assets/landing/pc.png";
import SecurityImg from "../../assets/landing/security.png";
import BarImg from "../../assets/landing/bar.png";
import BGImg from "../../assets/landing/BG.png";


const Famous = () => {
  
  return (
    
    
    <div className='flex-1 h-[500px]  mt-12 relative '>

<<<<<<< HEAD

        
      
        <h1 className='  head1'> محبوب ترین دسته بندی ها 
          <div className='head2'></div> </h1>
          <h3 className='head3'>گستره وسیعی از محبوب ترین دوره ها</h3>
          
    


        <div className='flex    h-[495px] '>
        <img src={BGImg} alt=""  className=' w-full  h-full mx-auto'/>
        
        <div className='flex justify-center  items-center w-full gap-[90px] max-xl:gap-20 max-lg:gap-14 max-md:gap-10 max-sm:gap-7 absolute top-[50%] '>
            
                <div style={{boxShadow:" 3px 3px 8px 0px #00000080 inset"}} 
                className='  famous '>
                <h1 className='famoustext '>امنیت شبکه</h1>
                  <img src={SecurityImg} alt="" className='famousimg'/></div>


                <div style={{boxShadow:" 3px 3px 8px 0px #00000080 inset"}}  className='famous '>
                <h1 className='famoustext'>بازی سازی</h1>
                  <img src={GameImg} alt="" className='famousimg'/></div>
                <div style={{boxShadow:" 3px 3px 8px 0px #00000080 inset"}} 
                 className='famous'>
                <h1 className='famoustext'>تحلیل داده</h1>
                  <img src={BarImg} alt="" className='famousimg '/></div>
                <div style={{boxShadow:" 3px 3px 8px 0px #00000080 inset"}} 
                 className='famous'>
                  <h1 className="w-[130px]  max-xl:text-[24px] max-sm:text-[10px] max-sm:right-[2%] max-lg:text-[14px] max-lg:bottom-[50%] max-lg:right-[10%] text-center text-[25px] text-[#006865] font-Yekan font-bold -rotate-45  absolute bottom-[40%]  right-[25%]">طراحی
                صفحات وب</h1>
                  <img src={PCImg} alt="" className='famousimg '/></div>
    
            </div>
       
=======
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
>>>>>>> e2bc6f3078ddf1de989bd059195101b674e9dba1
        
        </div>
 

    </div>

   

    
  

  )
}

export default Famous
