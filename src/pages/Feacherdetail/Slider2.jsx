import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import NewGridCard from '../../components/NewsGridCard';


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


const Slider2 = ({getNewsCard,h}) => {

  const { t } = useTranslation();
  

 
    const settings = {
      
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll:4,
        autoplay: false,
        autoplaySpeed: 3000,
     
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

    <div className=' relative max-xl:px-2  '>
    
        <h1 className=' pr-10 -mb-3 flex items-center justify-end  gap-2  font-bold text-[17px] text-[#1d1d1d] max-xl:text-[30px] dark:text-white'> {h}
          <div className='head2'></div>
        </h1> 
         

        

      <div className=' m-auto relative bg-primary/5 rounded-[25px] shadow-md   '>
       
    
      
            <Slider  {...settings} className='mx-4 '>
                
            {getNewsCard?.map((item)=>{
              return(  
                 <>
                <NewGridCard {...item}/>              
                </>
           
            )})}
            </Slider>
     
      </div>
    </div>

  )
}

export default Slider2
