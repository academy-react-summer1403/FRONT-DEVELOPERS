import React from 'react'
import Img1 from "../../assets/landing/items1.png";
import Img2 from "../../assets/landing/items2.png";
import Img3 from "../../assets/landing/items3.png";
import Img4 from "../../assets/landing/items4.png";
import Img5 from "../../assets/landing/items5.png";
import Img6 from "../../assets/landing/items6.png";
import { IoIosArrowBack } from "react-icons/io";


const News = () => {
  return (
    <div className='container flex items-center flex-col mt-[170px] h-[700px]'>

    {/* text section  */}
        <div className='flex flex-col relative w-[300px] h-[50px] mx-auto mb-12 '>
        <div className='w-3 h-3 rounded-full bg-primary mx-auto absolute right-[50px] top-[10px]'></div>
      
        <h1 className='font-bold text-center text-black text-2xl dark:text-white'> اخبار و مقالات </h1>
          <p className=' text-sm text-gray-400  text-center mt-5'>! خـــودت رو با خـــبر کن </p>
          
        </div>

    {/* body section  */}
        <div className='flex-1 justify-center items-center h-[400px] w-[1100px] mt-[30px] max-lg:w-[800px] max-md:h-[200px] max-md:w-[700px] max-sm:w-[550px]'>
            <div className='w-full h-full   flex flex-row justify-center items-center mx-auto gap-5 max-md:h-[400px] max-md:gap-2 max-sm:h-[350px]'>

                <div className='w-1/2 h-full  flex flex-col gap-2'>
                    <div className='flex flex-row items-start w-full h-[60%] gap-5'>
                        <div className='w-1/2 h-[90%]   max-lg:h-[80%] hover:bg-orange/20 rounded-xl hover:shadow-2xl hover:shadow-orange transition-shadow'><img src={Img1} alt="" className='w-full h-full '/></div>
                        <div className='w-1/2 h-[90%]  max-lg:h-[80%] hover:bg-orange/20 rounded-xl hover:shadow-2xl hover:shadow-orange transition-shadow'><img src={Img2} alt="" className='w-full h-full'/></div>
                    </div>
                    <div className='w-full h-[43%]  hover:bg-orange/20 rounded-xl hover:shadow-2xl hover:shadow-orange transition-shadow '><img src={Img4} alt="" className='w-full h-full '/></div>
                
                </div>



                <div className='w-1/2 h-full  flex flex-col gap-2'>
                  <div className='w-full h-[43%]  hover:bg-orange/20 rounded-xl hover:shadow-2xl hover:shadow-orange transition-shadow'><img src={Img3} alt="" className='w-full h-full'/></div>
                  <div className=' flex flex-row items-end w-full h-[60%]  gap-5'>
                    <div className='w-1/2 h-[90%] max-lg:h-[80%] hover:bg-orange/20 rounded-xl hover:shadow-2xl hover:shadow-orange transition-shadow'><img src={Img5} alt="" className='w-full h-full' /></div>
                     <div className='w-1/2 h-[90%]  max-lg:h-[80%] hover:bg-orange/20 rounded-xl hover:shadow-2xl hover:shadow-orange transition-shadow'><img src={Img6} alt="" className='w-full h-full'/></div>

                  </div>
                
                </div>

            </div>
            
            
            
        </div>   

        <div className='flex flex-row w-[150px] h-[20px] mx-auto mt-12 '>
        <IoIosArrowBack className='w-1/3 mt-[6px] -mr-[10px]'/>
        <p className='w-2/3 text-center font-semibold text-gray-400 '> مشاهده بیشتر</p>
       
        </div>

        
    </div>
  )
}

export default News
