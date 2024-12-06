import React, { useEffect, useState } from 'react'
// import Img1 from "../../assets/landing/figma.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import BackImg from "../../assets/landing/Rectangle 23.svg"
import BackLearn from "../../assets/landing/BackLearn.png"
import CoursGridCard from '../CoursGridCard';
import { NavLink } from 'react-router-dom';
import { useCourseLanding } from '../../core/services/query/queries';
import {  useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import GridCardLoading from '../skeleton/GridCardLoading';


const SampleNextArrow = (props)=> {
  const { className, style, onClick } = props;
  return (
    <div
      className={className }
      style={{ ...style, display: "block", position:"absolute" , left:"-5px" , top:"320px" 
      ,boxShadow:" 0px 0px 4px 0px rgba(0, 0, 0, 0.5)",background:"rgba(0,0,0,0.2)"
     , padding:"1px 0px 0px 0px ",borderRadius:"100%"}}
      onClick={onClick}
    />
  );
}
const SamplePrevArrow =(props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:"absolute", left:"-5px" , top:"343px" 
      , zIndex:"50",  boxShadow:" 0px 0px 4px 0px rgba(0, 0, 0, 0.5)",background:"rgba(0,0,0,0.2)" ,padding:"1px 0px 0px 0px ", borderRadius:"100%"}}
       
      onClick={onClick}
    />
  );
}


const Learning = ({h,getCourseCard}) => {

  const { t } = useTranslation();
  


 
 
    const settings = {
      
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        dotsClass: "button__bar ",
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint:768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 570,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        
      };

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }, [])
  

  return (

    <div className='container relative max-xl:px-2  mb-28'>
      <img src={BackLearn} alt="2" className='absolute w-full  scale-90 h-[70%] right-[0px] bottom-0 opacity-[30%]'/>
    

        <h1 className=' mt-40 head1 '> {h}
          <div className='head2'></div>
        </h1>
         <h3 className=' head3'>{t("learning1")}</h3>

        

      <div className=' m-auto relative   '>
        <NavLink to={"/courses"} className='relative'>
          <h3 className='z-[999] w-32 text-[#AAAAAA] absolute left-8 top-3 font-Yekan font-normal text-[20px]  flex items-center gap-2'>
          <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.84375 10.1875L1.15625 5.5L5.84375 0.8125" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {t("allcourse")}
          </h3>
        </NavLink>
           {/* bg img  */}
        <svg className='w-[324px] max-xl:hidden h-[420px] right-4 top-3  absolute ' width="324" height="420" viewBox="0 0 324 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_102_5167)">
        <path d="M0 30C0 13.4315 13.4315 0 30 0H294C310.569 0 324 13.4315 324 30V105V210V315V390C324 406.569 310.569 420 294 420H30C13.4315 420 0 406.569 0 390V345C0 328.431 13.5776 314.811 29.5512 310.412C59.9499 302.038 102.886 278.385 102.886 211.567C102.886 144.019 59.0062 119.247 28.5591 110.189C13.0194 105.566 0 92.1129 0 75.9V30Z" fill="url(#paint0_linear_102_5167)" fill-opacity="0.2"/>
        </g>
        <defs>
        <filter id="filter0_b_102_5167" x="-3" y="-3" width="330" height="426" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_102_5167"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_102_5167" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_102_5167" x1="313.385" y1="7.83582" x2="-35.7437" y2="366.695" gradientUnits="userSpaceOnUse">
        <stop offset="0.305" stop-color="#01CEC9"/>
        <stop offset="1" stop-color="#CB6D00" stop-opacity="0.5"/>
        </linearGradient>
        </defs>
        </svg>


        <div className='mt-10  max-sm:pl-[3%] max-lg:pr-0'>
            <Slider  {...settings} className='mx-4 '>
                
            {getCourseCard.data?.courseFilterDtos.map((item)=>{
              return(  
                 <>
                {loading ? <GridCardLoading/> : <CoursGridCard {...item}/>}                
                </>
           
            )})}
            </Slider>
        </div>
      </div>
    </div>

  )
}

export default Learning
