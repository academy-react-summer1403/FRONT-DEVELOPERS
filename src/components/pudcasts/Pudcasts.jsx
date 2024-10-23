import React, { useEffect } from "react";
import Slider from 'react-slick'
import BackP1Img from "../../assets/landing/BackPudcast.png";
import BackPImg from "../../assets/landing/BackP.png";

import Img1 from "../../assets/landing/reactPudcast.png";
import Img2 from "../../assets/landing/Ekhtiari.png";

import { useNewsPudcast } from '../../core/services/query/queries';
import AOS from "aos";



const Pudcasts = () => {



    const PudcastApi =  useNewsPudcast()
    console.log(PudcastApi)


    var settings = {

        dots:true,
        arrows:false,
        infinite:true,
        speed:8000,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:true,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
        dotsClass: "button__bar",

    }

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className='container     relative min-h-[550px] 
      flex justify-center flex-col
    items-center   mt-8 
'>
    <img src={BackP1Img} alt="" className='absolute top-[20px] opacity-30'/>

    {/* text section  */}

    <h1 className=' head1'> پادکست ها
          <div className='head2'></div> </h1>
          <h3 className='head3'>مجموعه ای از تمام آنچه شما نیاز دارید</h3>
          

  
    {/* hero section */}
    <div data-aos="fade-up" data-aos-duration="900" className='max-lg:w-[650px] w-[1000px] h-[500px]  mt-[10px]  relative max-sm:w-[550px] '>

        <img src={Img2} alt="" className='absolute top-[-20px] left-[-10px] max-md:w-[20%] max-lg:w-[20%] max-sm:top-4 max-sm:left-16'/>

        <img src={BackPImg} alt="" className='max-md:mt-[20px] max-sm:w-[450px] max-sm:mx-auto  max-sm:mt-[20px]'/>

        <img src={Img1} alt="" className='absolute w-[200px] h-[200px] top-[90px] right-[100px] z-50 max-lg:top-[50px] max-lg:right-[0px]
        max-md:w-[150px] max-sm:w-[100px] max-md:h-[150px] max-sm:h-[100px] max-md:right-[10px] max-md:top-24 max-sm:right-20 max-sm:top-0'/>
        
        <Slider {...settings} className='  absolute w-[700px] h-[250px] py-10  -top-80 max-sm:left-[60px] max-sm:w-[380px] max-sm:h-[190px] max-sm:top-[-205px]  max-md:left-[40px] overflow-hidden left-16  max-md:h-[220px] max-md:w-[460px]  max-md:top-[-255px] max-lg:top-[-250px] max-lg:left-[40px] max-lg:w-[450px] max-lg:h-[210px]       -black rounded-tl-[200px] '>
            {PudcastApi.data?.news.map((data)=>(

                <div className='     -ml-14'>

                   <div className='     flex flex-wrap justify-end'>
                        <h3 className=' text-[#AAAAAA] text-[12px] font-Yekan font-semibold   max-lg:mr-[-80px] max-md:-mr-[300px] max-sm:-mt-1 max-sm:mr-[-90px]  mr-[70px]'>
                            {data?.updateDate}
                            </h3>
                        <h1 className='   max-md:-mr-6 text-[26px] text-[#006865]  max-sm:text-[16px] max-sm:-mr-4 max-sm:mt-[9px] font-bold font-Yekan max-lg:text-[22px] max-lg:mr-[-45px]  text-right mt-5'>
                            {data?.title}
                        </h1>
                        <p className=" max-sm:ml-[60px] text-[#828F8E] max-md:-mr-5 text-[15px] leading-[21px] font-Yekan font-semibold text-right mt-3 w-96 max-lg:mr-[-45px] max-lg:text-[14px] max-lg:w-80   ml-14">
                            {data?.miniDescribe}
                        </p>
                    </div> 

                    <div className='  max-md:mt-2 max-md:ml-0  max-lg:mt-[10px]   mt-10 flex ml-14 items-center text-[13px] font-semibold font-Yekan text-[#AAAAAA] text-right gap-5'>
                        <div className=' flex items-center gap-1 ml-16'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 3V7H10M13 7C13 7.78793 12.8448 8.56815 12.5433 9.2961C12.2417 10.0241 11.7998 10.6855 11.2426 11.2426C10.6855 11.7998 10.0241 12.2417 9.2961 12.5433C8.56815 12.8448 7.78793 13 7 13C6.21207 13 5.43185 12.8448 4.7039 12.5433C3.97595 12.2417 3.31451 11.7998 2.75736 11.2426C2.20021 10.6855 1.75825 10.0241 1.45672 9.2961C1.15519 8.56815 1 7.78793 1 7C1 5.4087 1.63214 3.88258 2.75736 2.75736C3.88258 1.63214 5.4087 1 7 1C8.5913 1 10.1174 1.63214 11.2426 2.75736C12.3679 3.88258 13 5.4087 13 7Z" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {data?.updateDate}
                        </div>

                        <div className=' flex items-center gap-1'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.35726 8.21467C1.31125 8.07639 1.31125 7.92694 1.35726 7.78867C2.28193 5.00667 4.90659 3 7.99993 3C11.0919 3 13.7153 5.00467 14.6419 7.78533C14.6886 7.92333 14.6886 8.07267 14.6419 8.21133C13.7179 10.9933 11.0933 13 7.99993 13C4.90793 13 2.28393 10.9953 1.35726 8.21467Z" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10C7.46957 10 6.96086 9.78929 6.58579 9.41421C6.21071 9.03914 6 8.53043 6 8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8Z" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {data?.currentView}


                        </div>

                        <div className=' flex items-center gap-1'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 4.5C13 2.84333 11.6007 1.5 9.87467 1.5C8.58467 1.5 7.47667 2.25067 7 3.322C6.52333 2.25067 5.41533 1.5 4.12467 1.5C2.4 1.5 1 2.84333 1 4.5C1 9.31333 7 12.5 7 12.5C7 12.5 13 9.31333 13 4.5Z" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {data?.currentLikeCount}
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
