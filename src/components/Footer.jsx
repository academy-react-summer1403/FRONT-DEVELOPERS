import React from 'react'
import FooterLogo from "../assets/landing/footer.png";
import {  FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialYoutube } from 'react-icons/sl';
import { FaRegCopyright } from "react-icons/fa6"; 

import Email from "../assets/landing/email.png";
import Brand from "../assets/landing/brand.png";
import Logo from "../assets/landing/LOGO2.svg";
import { NavLink } from 'react-router-dom';



    const footerLinks = [
        {
            title:"Home",
            link:"/#"
        },
        {
            title:"About",
            link:"/#about"
        },
        {
            title:"Contact",
            link:"/#contact"
        },
        {
            title:"Blog",
            link:"/#blog"
        },
    ]

const Footer = () => {
  return (
    <div className='relative xl:px-0 xl:container w-full'>
        

        <div className='relative w-full flex justify-center items-center h-[500px]  max-md:bg-[#01CEC926] '>       
        
            <img src={FooterLogo} alt=""  className='absolute bottom-0 w-full h-[75%]  mx-auto max-md:hidden'/>

            <div className='container mx-0 px-0 grid grid-cols-3 justify-center items-center w-full h-[400px] 
                max-md:flex max-md:flex-col-reverse  max-md:top-[0px] absolute top-[100px]
            '>

                {/* left section  */}
                <div className='grid-col-1 mt-40 max-md:mt-0 px-4 grid grid-cols-3 
                    max-md:h-[100px]  max-md:px-0 max-md:mt-0 max-md:mb-8
                '>
                    <div className='grid-col-1 h-[20%]  grid justify-items-end 
                    max-xl:ml-[40px] 
                    max-lg:ml-[10px] 
                    '>
                        <img src={Brand} alt=""/>
                    </div>
                   
                    <ul className='grid-col-1 h-[20%] flex flex-col  max-lg:text-xs max-md:mr-[10px] font-sans text-right text-sm '>
                        <NavLink to={'/'} className='w-full  text-green/40 cursor-pointer hover:text-orange  transition-colors relative pr-4 group'><div className='absolute right-0 top-2 w-1.5 h-1.5 bg-green/70 group-hover:bg-orange rounded-full'></div>اساتید برتر</NavLink>
                        <NavLink to={'/'} className='w-full  text-green/40 cursor-pointer hover:text-orange  transition-colors relative pr-4 group'><div className='absolute right-0 top-2 w-1.5 h-1.5 bg-green/70 group-hover:bg-orange rounded-full'></div>دسته بندی ها</NavLink>
                        <NavLink to={'/'} className='w-full  text-green/40 cursor-pointer hover:text-orange  transition-colors relative pr-4 group'><div className='absolute right-0 top-2 w-1.5 h-1.5 bg-green/70 group-hover:bg-orange rounded-full'></div>خدمات</NavLink>
                        <NavLink to={'/auth/3'} className='w-full  text-green/40 cursor-pointer hover:text-orange  transition-colors relative pr-4 group'><div className='absolute right-0 top-2 w-1.5 h-1.5 bg-green/70 group-hover:bg-orange rounded-full'></div>ورود به حساب </NavLink>

                    </ul>

                    <ul className='grid-col-1 h-[20%] flex flex-col  max-lg:text-xs max-md:mr-[10px]  text-right text-sm '>
                    <NavLink to={'/courses'} className='w-full  text-green/40 cursor-pointer hover:text-orange  transition-colors relative pr-4 group'><div className='absolute right-0 top-2 w-1.5 h-1.5 bg-green/70 group-hover:bg-orange rounded-full'></div>دوره ها</NavLink>
                    <NavLink to={'/article-news'} className='w-full  text-green/40 cursor-pointer hover:text-orange  transition-colors relative pr-4 group'><div className='absolute right-0 top-2 w-1.5 h-1.5 bg-green/70 group-hover:bg-orange rounded-full'></div>اخبار و مقالات</NavLink>
                    <NavLink to={'/'} className='w-full  text-green/40 cursor-pointer hover:text-orange  transition-colors relative pr-4 group'><div className='absolute right-0 top-2 w-1.5 h-1.5 bg-green/70 group-hover:bg-orange rounded-full'></div>پادکست ها</NavLink>
                    <NavLink to={'/'} className='w-full  text-green/40 cursor-pointer hover:text-orange  transition-colors relative pr-4 group'><div className='absolute right-0 top-2 w-1.5 h-1.5 bg-green/70 group-hover:bg-orange rounded-full'></div>تماس با ما</NavLink>

                    </ul>

                </div>

                {/* middle  */}
                <div className='grid-col-1 max-md:w-1/2 flex flex-col justify-center h-full pl-2 max-md:pl-0 max-md:mb-8'>
                    <div className='w-full h-[40%] flex justify-center'>
                        <img src={Logo} alt="" className='w-[190px] pb-2 mt-10 max-md:mt-0'/>
                    </div>
                    <div className='w-full h-8 w-[60%] max-lg:w-[80%] max-sm:w-full leading-8 rounded-full mx-auto flex justify-center bg-green text-white '>
                        info@pazhooheshgah.ir
                    </div>
                    <div className='w-full pt-4 flex flex-row justify-center items-center gap-2 mb-2 '>
                        <div className='w-9 h-9 rounded-full text-white  bg-green'><LiaTelegramPlane className='w-5 h-5 ml-2 mt-2'/></div> 
                        <div className='w-9 h-9 rounded-full text-white  bg-green'><FaInstagram className='w-5 h-5 ml-2 mt-2'/></div> 
                        <div className='w-9 h-9 rounded-full text-white  bg-green'><SlSocialYoutube className='w-5 h-5 ml-2 mt-2'/></div> 
                        <div className='w-9 h-9 rounded-full text-white  bg-green'><FaLinkedinIn className='w-5 h-5 ml-2 mt-2'/></div> 
                       
                    </div>
                </div>

                {/* right section  */}
                <div className='grid-col-1 h-full flex flex-col justify-center gap-3 items-end max-md:items-start px-8 max-md:mb-8'>
                    <div className=' mt-[100px] text-green text-xs text-right font-medium
                    max-lg:mr-2 
                    max-md:w-full max-md:text-right '>
                       مجموعه آموزشی فلان فعالیت خود را از سال 1390 آغاز کرده است و
                      امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است
                       
                    </div>
                    <div className='text-green text-sm text-right font-semibold w-[70%] relative 
                    max-xl:w-[85%]
                    max-lg:mr-2 
                    max-md:w-full max-md:text-right'>
                       
                        ساری، میدان خزر ، جاده فرح آباد ، جنب مجتمع دنیای آرزو
                       <p className='absolute font-normal left-8 max-md:right-0 top-6 max-lg:top-14 max-md:top-10 max-lg:text-md'> 011-43332000</p>
                    </div>

                </div>



            </div>

          </div> 

          <div className='h-[40px] flex justify-center items-center w-full bg-green  bottom-0 mx-auto z-50 text-sm text-white leading-10'>
            <div className='flex flex-row-reverse  justify-center mx-auto gap-1
                max-xl:
            '>
           کلیه حقوق این وبسایت مطعلق به آموزشگاه فلان میباشد

            <FaRegCopyright className='mt-2'  />
            </div>
        </div> 
          
    </div>  
  )
}

export default Footer
