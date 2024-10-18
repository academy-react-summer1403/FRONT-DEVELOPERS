import React from 'react'
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


const Learning = () => {

    const query = useSelector((state) => state.SearchSlice.data);
  console.log(query);
  

  const getCourseCard = useCourseLanding(query)
  console.log(getCourseCard.data?.courseFilterDtos)

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

  return (

    <div className='container relative max-xl:px-2  mb-28'>
      <img src={BackLearn} alt="" className='absolute w-full  scale-90 h-[70%] right-[0px] bottom-0 opacity-[30%]'/>
    

        <h1 className=' mt-40 head1 '> دوره های آموزشی 
          <div className='head2'></div>
        </h1>
         <h3 className=' head3'>به روز ترین دوره هایی که میتونید پیدا کنید</h3>

        

      <div className=' m-auto relative   '>
        <NavLink to={""}>  <h3 className=' text-[#AAAAAA] absolute left-8 top-3 font-Yekan font-normal text-[20px]  flex items-center gap-2'>
          <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.84375 10.1875L1.15625 5.5L5.84375 0.8125" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            همه دوره ها
          </h3>
        </NavLink>
        <img src={BackImg} alt="" className='w-[324px] max-xl:hidden h-[420px] right-4 top-3  absolute '/>
   
        <div className='mt-10  max-sm:pl-[3%] max-lg:pr-0'>
            <Slider  {...settings} className='mx-4 '>
                
            {getCourseCard.data?.courseFilterDtos.map((item)=>{
              return(  



                <CoursGridCard {...item}/>
              
           
            )})}
            </Slider>
        </div>
      </div>
    </div>

  )
}

export default Learning
