import React from 'react'
import Slider from 'react-slick'
import BackPImg from "../../assets/landing/BackPudcast.png";
import Img1 from "../../assets/landing/reactPudcast.png";
import Img2 from "../../assets/landing/Ekhtiari.png";

import { Clock, Eye, Heart } from 'lucide-react';






const ImageList = [
    {
        id:1,
        date:"14اذر",
        title:"شروع یادگیری توسعه وب با ری اکت",
        description:"ری اکت (React) به عنوان یکی از محبوب‌ترین کتابخانه‌های جاوا اسکریپتی و یکی از مهمترین ابزارهای توسعه وب شناخته می‌شود"
,
        like:23,
        view:56,
        time:"00:12"
    },
    {
        id:2,
        
        title:"ARIA TRENDING ",
        description:"NEWEST PRODUCTS",
    },
    {
        id:3,
        
        title:"womens clothes",
        description:"70% Off to All womens clothing products ",
    },
    {
        id:4,
        
        title:"Newest TRENDING Products ",
        description:"MOSHTABA GHATESH KON",
    },
]

const Pudcasts = () => {

    var settings = {

        dots:true,
        arrows:false,
        infinite:true,
        speed:1000,
        slidesToScroll:1,
        autoplay:false,
        autoplaySpeed:true,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
        dotsClass: "button__bar",

    }



  return (
    <div className='container relative overflow-hidden min-h-[550px] 
    sm:min-h-[650px]  flex justify-center flex-col
    items-center   mt-12
'>

    {/* text section  */}

    <div className='flex flex-col relative w-[300px] h-[50px] mx-auto mb-12 '>
        <div className='w-3 h-3 rounded-full bg-primary mx-auto absolute right-[60px] top-[10px]'></div>
      
        <h1 className='font-bold text-center text-black text-2xl '> پادکست ها</h1>
          <p className=' text-sm text-gray-400  text-center mt-5'>مجموعه ای از تمام آنچه شما نیاز دارید</p>
          
        </div>
  
    {/* hero section */}
    <div className='container w-[1000px] h-[500px]  mt-[10px]  relative'>

        <img src={Img2} alt="" className='absolute top-[0px] left-[0px]'/>

        <img src={BackPImg} alt="" />

        <img src={Img1} alt="" className='absolute w-[200px] h-[200px] top-[90px] right-[100px] z-50'/>
        
                <Slider {...settings} className='absolute w-[700px] h-[300px] py-10 top-[60px] right-[120px]'>
                    {ImageList.map((data)=>(

        <div>
            <div className=' grid grid-coles-1 sm:grid-coles-2   '>
                
                {/* text content section */}

                <div className='flex-flex-col justify-center gap-4 
                    pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1
                    relative z-10 
                '>

                        <span className='w-[100px] h-[30px] text-sm text-gray-500 absolute  left-[40px]'>{data.date}</span>

                    <h1 className='h-[100px] text-primary text-center text-5xl sm:text-6xl lg:text-xl font-bold'
                    
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >
                        {data.title}
                    </h1>
                    <p className='text-sm h-[50px] text-center text-gray-500 w-[400px] ml-[100px]' 
                     data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                    >
                        {data.description}
                    </p>
                    <div className='flex flex-row ml-[20px] h-[80px] gap-2'
                           data-aos="fade-up"
                           data-aos-duration="500"
                           data-aos-delay="300"
                    >

                        <div className='w-[100px] h-[30px] mt-6 text-sm text-gray-500 relative'>{data.time}<Clock className='absolute w-[15px] h-[15px] top-[2px] -left-[20px]  '/></div>
                        <div className='w-[50px] h-[30px] mt-6 text-sm text-gray-500 relative'>{data.view}<Eye className='absolute w-[15px] h-[15px] top-[2px] -left-[20px]  '/></div>
                        <div className='w-[50px] h-[30px] mt-6 text-sm text-gray-500  relative'>{data.like}<Heart className='absolute w-[15px] h-[15px] top-[2px] -left-[20px]  '/></div>

            
                    </div>
                </div>

             
            </div>
           
        </div>
         ))}
        </Slider>
    </div>
    
</div>
  )
}

export default Pudcasts
