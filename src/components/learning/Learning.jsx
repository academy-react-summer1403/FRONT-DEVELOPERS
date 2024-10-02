import React from 'react'
// import Img1 from "../../assets/landing/figma.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import BackImg from "../../assets/landing/Rectangle 23.svg"
import BackLearn from "../../assets/landing/BackLearn.png"
import CoursGridCard from '../CoursGridCard';





const Data=[
    {
        id:1,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,
    },
    {
        id:2,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,

    },
    {
        id:3,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,

    },
    {
        id:4,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,

    },
    {
        id:5,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,

    },
    {
        id:6,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,

    },
    {
        id:7,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,

    },
    {
        id:8,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,

    },
    {
        id:9,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,

    },
    {
        id:10,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,

    },
    {
        id:11,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,

    },
    {
        id:12,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        // img:Img1,

    },
]



const Learning = () => {

    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        dotsClass: "button__bar",
        arrows: true,
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
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
   <div className='py-14 mb-10 max-lg:mt-[130px] max-md:mt-[160px] '>
       <div className='container relative'>
          <img src={BackLearn} alt="" className='absolute w-[1800px] h-full right-[0px] opacity-30'/>
       <div className='flex flex-col relative w-[300px] h-[50px] mx-auto mb-12 '>
        <div className='w-3 h-3 rounded-full bg-primary mx-auto absolute right-[30px] top-[10px]'></div>
      
        <h1 className='font-bold text-center text-black text-2xl dark:text-white'> دوره های آموزشی </h1>
          <p className=' text-sm text-gray-400  text-center mt-5'>به روز ترین دوره هایی که میتونید پیدا کنید</p>
          
        </div>

        

        <div className='w-6/7 m-auto relative  max-lg:w-[900px] max-lg:-ml-[90px]  max-md:h-[500px] max-md:w-[700px] max-md:-ml-[60px]'>
        <img src={BackImg} alt="" className='w-[330px] h-[630px] absolute right-[16px] -top-[100px] max-xl:w-[230px] max-xl:h-[530px] max-lg:w-[250px]
        max-lg:h-[550px] max-lg:-top-[100px] max-lg:right-[20px] max-md:right-[5px] max-sm:right-[60px]'/>
        <div className='mt-10 '>
            <Slider {...settings}>
                
            {Data.map((item)=>{
              return(  



                <CoursGridCard {...item}/>
              
              // <div className='h-[400px] w-[500px] text-black  max-md:h-[300px] '>
              
              // <div key={d.id} className=' flex flex-col items-center'>

              //   <div className='h-[170px] w-[250px] bg-gradient-to-r from-purple/90 to-orange/90 drop-shadow-xl flex items-center
              //    rounded-xl mx-auto z-50 absolute bottom-[190px] max-xl:w-[150px] max-xl:h-[120px] max-xl:top-[30px]'>
              //       <img src={d.img} alt="" className='h-[100px] w-[100px] mx-auto rounded-full '/>    
              //   </div>

              //   <div className='flex flex-col justify-end items-center gap-4 p-2 w-[280px] h-[290px] rounded-xl drop-shadow-md border
              //    border-gray-200 bg-white absolute bottom-[30px] max-xl:w-[200px] max-xl:h-[200px] max-xl:top-[90px] hover:shadow-lg hover:shadow-orange transition-shadow
              //    dark:bg-gray-700/70 dark:border-none'>
              //        <p className='text-xl font-semibold border border-red-400'>{d.name}</p>
              //        <p className='text-center leading-[10px] border border-blue-300'>{d.title}</p>   

              //   </div>

              //   </div>
              //   </div>
            )})}
            </Slider>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Learning
