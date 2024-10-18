import React from 'react'
import GameImg from "../../assets/landing/game.png";
import PCImg from "../../assets/landing/pc.png";
import SecurityImg from "../../assets/landing/security.png";
import BarImg from "../../assets/landing/bar.png";
import BGImg from "../../assets/landing/BG.png";


const Famous = () => {
  
  return (
    
    
    <div className='flex-1 h-[500px]  mt-12 relative   w-full'>

        
      
        <h1 className='  head1 max-sm:text-center'> محبوب ترین دسته بندی ها 
          <div className='head2'></div> </h1>
          <h3 className='head3'>گستره وسیعی از محبوب ترین دوره ها</h3>
          
    


        <div className='flex h-[495px]'>
        <img src={BGImg} alt=""  className=' w-full  h-full mx-auto'/>
        
        <div className='flex justify-center  items-center w-full gap-[90px] max-xl:gap-20 max-lg:gap-14 max-md:gap-10 absolute top-[50%] 
          max-sm:grid max-sm:grid-cols-2 max-sm:justify-items-center max-sm:top-[40%] max-sm:gap-7
        '>
            
                <div style={{boxShadow:" 3px 3px 8px 0px #00000080 inset"}} 
                className='  famous'>
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
       

        
        </div>
 

    </div>

   

    
  

  )
}

export default Famous
