import React from 'react'
import ChatImg from "../../assets/landing/Chat.png";
import CerImg from "../../assets/landing/Certificate.png";
import JobImg from "../../assets/landing/New Job.png";


import BP1Img from "../../assets/landing/BProduct1.png";
import BP2Img from "../../assets/landing/BProduct2.png";
import BP3Img from "../../assets/landing/BProduct3.png";
import BP4Img from "../../assets/landing/BProduct4.png";





const Products = () => {
  return (
    <div>
    <div className='container'>

        {/* header section  */}
        <div className='flex flex-col relative w-[300px] h-[50px] mx-auto mb-12 '>
        <div className='w-3 h-3 rounded-full bg-primary mx-auto absolute right-[70px] top-[10px]'></div>
      
        <h1 className='font-bold text-center text-black text-2xl '> خدمات ما </h1>
          <p className=' text-sm text-gray-400  text-center mt-5'>مجموعه ای از تمام آنچه شما نیاز دارید</p>
          
        </div>
        {/* body section  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-4 gap-0 place-items-center 
        '>
            
                
                        <div data-aos="zoom-in"  className='
                            rounded-2xl 
                            hover:bg-black/80 dark:hover:bg-secondary
                            hover:text-white relative  duration-hight 
                            group w-[220px] h-[180px] mb-[50px] 
                        '>
                             <img src={BP4Img} alt="" className='w-full h-full mt-[16px] ml-[2px] '/>
                            {/* image section  */}
                            <div className='h-[100px]'>
                                
                            </div>
                            {/* details section  */}
                            <div className='p-4 text-center'>
                                {/* star rating  */}
                              
                                <h1 className='text-xl font-bold absolute bottom-[80px] left-[95px]'>aria</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 
                                    text-sm line-camp-2 absolute bottom-[30px] left-[95px]
                                '>salam</p>

                                <button className=' hover:scale-105 
                                    duration-300 text-white bg-[#E48900] shadow-inner shadow-gray-600 w-[80px] h-[80px] rounded-full 
                                    mt-4 group-hover:bg-white group-hover:text-secondary absolute -top-[50px] right-[68px]

                                ' 
                                   
                                >

                                    <img src={ChatImg} alt="" className='mx-auto'/>
                                    
                                </button>
                            </div>
                        </div>



                        <div data-aos="zoom-in"  className='
                            rounded-2xl 
                            hover:bg-black/80 dark:hover:bg-secondary
                            hover:text-white relative  duration-hight 
                            group w-[220px] h-[180px] mt-[300px]
                        '>
                             <img src={BP3Img} alt="" className='w-full h-full mt-[16px] ml-[2px]'/>
                            {/* image section  */}
                            <div className='h-[100px]'>
                              
                            </div>
                            {/* details section  */}
                            <div className='p-4 text-center'>
                                {/* star rating  */}
                              
                                <h1 className='text-xl font-bold absolute bottom-[80px] left-[95px]'>aria</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 
                                    text-sm line-camp-2 absolute bottom-[30px] left-[95px]
                                '>salam</p>

                                <button className=' hover:scale-105 
                                    duration-300 text-white bg-[#CEB901] shadow-inner shadow-gray-600 w-[80px] h-[80px] rounded-full 
                                    mt-4 group-hover:bg-white group-hover:text-secondary absolute -top-[50px] right-[68px]

                                ' 
                                   
                                >

                                    <img src={JobImg} alt="" className='mx-auto'/>
                                    
                                </button>
                            </div>
                        </div>



                        <div data-aos="zoom-in"  className='
                            rounded-2xl 
                            hover:bg-black/80 dark:hover:bg-secondary
                            hover:text-white relative  duration-hight 
                            group w-[220px] h-[180px] 
                        '>
                             <img src={BP2Img} alt="" className='w-full h-full mt-[16px] ml-[2px]'/>
                            {/* image section  */}
                            <div className='h-[100px]'>
                              
                            </div>
                            {/* details section  */}
                            <div className='p-4 text-center'>
                                {/* star rating  */}
                              
                                <h1 className='text-xl font-bold absolute bottom-[80px] left-[95px]'>aria</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 
                                    text-sm line-camp-2 absolute bottom-[30px] left-[95px]
                                '>salam</p>

                                <button className=' hover:scale-105 
                                    duration-300 text-white bg-[#0184CE] shadow-inner shadow-gray-600 w-[80px] h-[80px] rounded-full 
                                    mt-4 group-hover:bg-white group-hover:text-secondary absolute -top-[50px] right-[68px]

                                ' 
                                   
                                >

                                    <img src={CerImg} alt="" className='mx-auto'/>
                                    
                                </button>
                            </div>
                        </div>



                        <div data-aos="zoom-in"  className='
                            rounded-2xl 
                            hover:bg-black/80 dark:hover:bg-secondary
                            hover:text-white relative  duration-hight 
                            group w-[220px] h-[180px] mt-[300px]
                        '>
                            <img src={BP1Img} alt="" className='w-full h-full mt-[16px] ml-[2px]'/>
                            {/* image section  */}
                            <div className='h-[100px]'>
                             
                            </div>
                            {/* details section  */}
                            <div className='p-4 text-center'>
                                {/* star rating  */}
                              
                                <h1 className='text-xl font-bold absolute bottom-[80px] left-[95px]'>aria</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 
                                    text-sm line-camp-2 absolute bottom-[30px] left-[95px]
                                '>salam</p>

                                <button className=' hover:scale-105 
                                    duration-300 text-white bg-primary shadow-inner shadow-gray-600 w-[80px] h-[80px] rounded-full 
                                    mt-4 group-hover:bg-white group-hover:text-secondary absolute -top-[50px] right-[68px]

                                ' 
                                   
                                >

                                    <img src={ChatImg} alt="" className='mx-auto'/>
                                    
                                </button>
                            </div>
                        </div>


                        
           
        </div>
    </div>
</div>
  )
}

export default Products
