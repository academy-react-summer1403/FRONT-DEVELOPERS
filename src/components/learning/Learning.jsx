import React from 'react'
import Img1 from "../../assets/landing/figma.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import BackImg from "../../assets/landing/Rectangle 23.svg"
import { div } from 'framer-motion/client';



const Data=[
    {
        id:1,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,
    },
    {
        id:2,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,

    },
    {
        id:3,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,

    },
    {
        id:4,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,

    },
    {
        id:5,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,

    },
    {
        id:6,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,

    },
    {
        id:7,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,

    },
    {
        id:8,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,

    },
    {
        id:9,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,

    },
    {
        id:10,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,

    },
    {
        id:11,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,

    },
    {
        id:12,
        name:"Aria",
        title:"FRONT DEVELOPERS",
        img:Img1,

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
      };

  return (
   <div className='py-14 mb-10'>
       <div className='container '>
        
       <div className='flex flex-col relative w-[300px] h-[50px] mx-auto mb-12 '>
        <div className='w-3 h-3 rounded-full bg-primary mx-auto absolute right-[30px] top-[10px]'></div>
      
        <h1 className='font-bold text-center text-black text-2xl '> دوره های آموزشی </h1>
          <p className=' text-sm text-gray-400  text-center mt-5'>به روز ترین دوره هایی که میتونید پیدا کنید</p>
          
        </div>

        

        <div className='w-6/7 m-auto relative '>
        <img src={BackImg} alt="" className='w-[330px] h-[630px] absolute right-[16px] -top-[100px]'/>
        <div className='mt-10 '>
            <Slider {...settings}>
                
            {Data.map((d)=>{
              return(  
              
              <div className='h-[400px] w-[500px] text-black '>
              
              <div key={d.id} className=' flex flex-col items-center '>

                <div className='h-[170px] w-[250px] bg-gradient-to-r from-purple/90 to-orange/90 drop-shadow-xl flex items-center
                 rounded-xl mx-auto z-50 absolute bottom-[190px]'>
                    <img src={d.img} alt="" className='h-[100px] w-[100px] mx-auto rounded-full '/>    
                </div>

                <div className='flex flex-col justify-end items-center gap-4 p-2 w-[280px] h-[290px] rounded-xl drop-shadow-md border border-gray-200 bg-white absolute bottom-[30px]'>
                     <p className='text-xl font-semibold border border-red-400'>{d.name}</p>
                     <p className='text-center leading-[10px] border border-blue-300'>{d.title}</p>   

                </div>

                </div>
                </div>
            )})}
            </Slider>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Learning
