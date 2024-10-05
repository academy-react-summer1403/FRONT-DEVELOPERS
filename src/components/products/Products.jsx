import React from 'react'
import ChatImg from "../../assets/landing/Chat.png";
import CerImg from "../../assets/landing/Certificate.png";
import JobImg from "../../assets/landing/New Job.png";

import BackProducts from "../../assets/landing/backproducts.png";

import BP1Img from "../../assets/landing/BProduct1.png";
import BP2Img from "../../assets/landing/BProduct2.png";
import BP3Img from "../../assets/landing/BProduct3.png";
import BP4Img from "../../assets/landing/BProduct4.png";





const Products = () => {
  return (
    <div>
    <div className='container relative'>
        <img src={BackProducts} alt="" className='absolute left-[200px] top-[80px] rotate-180 w-[1000px] h-[600px] mx-auto opacity-30'/>

        {/* header section  */}
        <div className='flex flex-col relative w-[300px] h-[50px] mx-auto mb-12'>
        <div className='w-3 h-3 rounded-full bg-primary mx-auto absolute right-[70px] top-[10px]'></div>
      
        <h1 className='font-bold text-center text-black text-2xl dark:text-white'> خدمات ما </h1>
          <p className=' text-sm text-gray-400  text-center mt-5'>مجموعه ای از تمام آنچه شما نیاز دارید</p>
          
        </div>
        {/* body section  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-4 gap-0 place-items-center max-lg:gap-[200px] max-sm:mt-[150px]
        '>
            
                
                        <div data-aos="zoom-in"  className='
                            rounded-2xl 
                            hover:shadow-xl hover:shadow-orange dark:hover:bg-secondary
                            hover:text-orange relative  duration-hight 
                            group w-[220px] h-[180px] mb-[50px] transition-shadow
                        '>
                             <img src={BP4Img} alt="" className='w-full h-full '/>
                            {/* image section  */}
                            <div className='h-[100px]'>
                                
                            </div>
                            {/* details section  */}
                            <div className='p-4 text-center'>
                                {/* star rating  */}
                              
                                <h1 className='text-xl font-bold text-orange absolute bottom-[80px] left-[82px]'>مشاوره</h1>
                                <p className='text-gray-400 group-hover:text-orange duration-300 
                                     text-xs line-camp-2 absolute bottom-[30px] left-[10px]
                                '>متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.</p>

                                <button className=' hover:scale-105 
                                    duration-300 text-white bg-[#E48900] shadow-inner shadow-gray-600 w-[80px] h-[80px] rounded-full 
                                    mt-4  hover:shadow-lg hover:shadow-orange  absolute -top-[65px] right-[70px] transition-all

                                ' 
                                   
                                >

                                    <img src={ChatImg} alt="" className='mx-auto'/>
                                    
                                </button>
                            </div>
                        </div>



                        <div data-aos="zoom-in"  className='
                            rounded-2xl 
                            hover:shadow-xl hover:shadow-orange dark:hover:bg-secondary
                            hover:text-orange relative  duration-hight transition-shadow
                            group w-[220px] h-[180px] mt-[300px] max-sm:-mt-[110px]
                        '>
                             <img src={BP3Img} alt="" className='w-full h-full'/>
                            {/* image section  */}
                            <div className='h-[100px]'>
                              
                            </div>
                            {/* details section  */}
                            <div className='p-4 text-center'>
                                {/* star rating  */}
                              
                                <h1 className='text-xl font-bold text-yellow-600 absolute bottom-[80px] left-[70px]'>مدرک معتبر</h1>
                                <p className='text-gray-400 group-hover:text-orange duration-300 
                                     text-xs line-camp-2 absolute bottom-[30px] left-[10px]
                                '>متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.</p>

                                <button className=' hover:scale-105 
                                    duration-300 text-white bg-[#CEB901] shadow-inner shadow-gray-600 w-[80px] h-[80px] rounded-full 
                                    mt-4 hover:shadow-lg hover:shadow-orange  absolute -top-[65px] right-[70px] transition-all

                                ' 
                                   
                                >

                                    <img src={JobImg} alt="" className='mx-auto'/>
                                    
                                </button>
                            </div>
                        </div>



                        <div data-aos="zoom-in"  className='
                            rounded-2xl 
                            hover:shadow-xl hover:shadow-orange dark:hover:bg-secondary
                            hover:text-orange relative  duration-hight transition-shadow
                            group w-[220px] h-[180px] max-md:-mt-[230px] max-sm:-mt-[30px]
                        '>
                             <img src={BP2Img} alt="" className='w-full h-full'/>
                            {/* image section  */}
                            <div className='h-[100px]'>
                              
                            </div>
                            {/* details section  */}
                            <div className='p-4 text-center'>
                                {/* star rating  */}
                              
                                <h1 className='text-xl font-bold text-blue-500 absolute bottom-[80px] left-[40px] whitespace-nowrap'>فرصت های شغلی</h1>
                                <p className='text-gray-400 group-hover:text-orange duration-300 
                                     text-xs line-camp-2 absolute bottom-[30px] left-[10px]
                                '>متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.</p>

                                <button className=' hover:scale-105 
                                    duration-300 text-white bg-[#0184CE] shadow-inner shadow-gray-600 w-[80px] h-[80px] rounded-full 
                                    mt-4 hover:shadow-lg hover:shadow-orange transition-all absolute -top-[65px] right-[70px]

                                ' 
                                   
                                >

                                    <img src={CerImg} alt="" className='mx-auto'/>
                                    
                                </button>
                            </div>
                        </div>



                        <div data-aos="zoom-in"  className='
                            rounded-2xl 
                            hover:shadow-xl hover:shadow-orange dark:hover:bg-secondary
                            hover:text-orange relative  duration-hight transition-shadow
                            group w-[220px] h-[180px] mt-[300px] max-sm:-mt-[60px]  max-md:-mt-[60px]
                        '>
                            <img src={BP1Img} alt="" className='w-full h-full '/>
                            {/* image section  */}
                            <div className='h-[100px]'>
                             
                            </div>
                            {/* details section  */}
                            <div className='p-4 text-center'>
                                {/* star rating  */}
                              
                                <h1 className='text-xl font-bold text-green absolute bottom-[80px] left-[82px]'>مشاوره</h1>
                                <p className='text-gray-400 group-hover:text-orange  duration-300 
                                text-xs line-camp-2 absolute bottom-[30px] left-[10px]
                                '>متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.</p>

                                <button className=' hover:scale-105 
                                    duration-300 text-white bg-primary shadow-inner shadow-gray-600 w-[80px] h-[80px] rounded-full 
                                    mt-4 hover:shadow-lg hover:shadow-orange transition-all absolute -top-[65px] right-[70px]

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
