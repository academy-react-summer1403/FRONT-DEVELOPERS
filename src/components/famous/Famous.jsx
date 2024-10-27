import {useEffect} from 'react'
import GameImg from "../../assets/landing/game.png";
import PCImg from "../../assets/landing/pc.png";
import SecurityImg from "../../assets/landing/security.png";
import BarImg from "../../assets/landing/bar.png";
import BGImg from "../../assets/landing/BG.svg";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';


const Famous = () => {

  const { t } = useTranslation();
  


  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    
    
    <div className='flex-1 h-[500px]  mt-12 relative   w-full'>

        
      
        <h1 className='  head1 max-sm:text-center'>{t("category")}
          <div className='head2'></div> </h1>
          <h3 className='head3'>{t("categorytext")}</h3>
          
    


        <div  className='flex h-[495px] max-sm:bg-primary/20 max-sm:h-[395px] max-sm:my-12 '>

        <svg className=' w-full max-sm:hidden' height="496" viewBox="0 0 1439 496" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_109_478)">
        <path d="M-516.5 0L102.25 27.75L411.625 41.625L566.312 48.5625L643.656 52.0312C643.656 52.0312 700.5 27.75 721 27.75C741.5 27.75 798.906 52.0312 798.906 52.0312L876.812 48.5625L1032.62 41.625L1344.25 27.75L1967.5 0V496L1344.25 468L1032.62 454L876.812 447L798.906 443.5C798.906 443.5 737.5 468 721 468C704.5 468 643.656 443.5 643.656 443.5L566.312 447L411.625 454L102.25 468L-516.5 496V0Z" className=' w-full  h-full mx-auto fill-primary' fill-opacity="0.3"/>
        </g>
        <defs>
        <filter id="filter0_b_109_478" x="-522.5" y="-6" width="9496" height="508" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="3"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_109_478"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_109_478" result="shape"/>
        </filter>
        </defs>
        </svg>
 

        
        <div data-aos="zoom-out-right"  data-aos-duration="900"
         className='flex justify-center  items-center w-full gap-[90px] max-xl:gap-20 max-lg:gap-14 max-md:gap-10 absolute top-[50%] 
          max-sm:grid max-sm:grid-cols-2 max-sm:justify-items-center max-sm:top-[40%] max-sm:gap-7
        '>
            
                <div   style={{boxShadow:" 3px 3px 8px 0px #00000080 inset"}} 
                className='  famous'>
                <h1 className='famoustext '>{t("Network")}</h1>
                  <img src={SecurityImg} alt="" className='famousimg'/></div>


                <div style={{boxShadow:" 3px 3px 8px 0px #00000080 inset"}}  className='famous '>
                <h1 className='famoustext'>{t("game")}</h1>
                  <img src={GameImg} alt="" className='famousimg'/></div>

                <div style={{boxShadow:" 3px 3px 8px 0px #00000080 inset"}} 
                 className='famous'>
                <h1 className='famoustext'>{t("data")}</h1>
                  <img src={BarImg} alt="" className='famousimg '/></div>

                <div  style={{boxShadow:" 3px 3px 8px 0px #00000080 inset"}} 
                 className='famous'>
                  <h1 className="w-[130px]  max-xl:text-[24px] max-sm:text-[10px] max-sm:right-[2%] max-lg:text-[14px] max-lg:bottom-[50%] max-lg:right-[10%] text-center text-[25px] text-[#006865] font-Yekan font-bold -rotate-45  absolute bottom-[40%]  right-[25%]">
                  {t("web")}</h1>
                  <img src={PCImg} alt="" className='famousimg '/></div>
    
            </div>
       

        
        </div>
 

    </div>

   

    
  

  )
}

export default Famous
