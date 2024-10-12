import React from 'react'
import FooterLogo from "../assets/landing/footer.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import Group from "../assets/landing/group.png";
import Email from "../assets/landing/email.png";
import { motion } from 'framer-motion';
import { SliderRight } from '../utility/animation';
import Address from "../assets/landing/address.png";
import Desc from "../assets/landing/desc.png";
import Brand from "../assets/landing/brand.png";
import Logo from "../assets/landing/logo1.svg";





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
    <div className='flex-1  h-[400px] max-xl:h-[720px] max-2xl:h-[800px] relative'>
        <div className='h-[40px] w-full bg-green absolute -bottom-[100px] mx-auto z-50'>
            <img src={Group} alt="" className='bg-green w-[300px] h-[30px] mx-auto'/>
        </div>

        <div className='flex justify-center items-center rounded-xl h-[500px]  relative'>
            <img src={FooterLogo} alt=""  className=' w-full  h-full mx-auto '/>

            <div className='flex flex-row justify-center items-center w-[1300px] h-[400px]  absolute top-[100px]'>

                {/* left section  */}
                <div className='w-[40%] h-full  flex flex-row justify-center items-center'>
                    <div className='w-[35%] h-[50%]  mt-[110px] max-xl:ml-[40px] max-lg:ml-[150px] max-md:mb-[300px] max-md:ml-[320px] max-md:w-[500px]'>
                        <img src={Brand} alt=""/>
                    </div>
                    <ul className='w-[35%] h-[50%] flex flex-col items-center mt-[110px] max-md:mr-[10px] max-md:whitespace-nowrap'>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-right cursor-pointer hover:text-orange  transition-colors'>دوره ها</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-right cursor-pointer hover:text-orange  transition-colors'>اخبار و مقالات</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-right cursor-pointer hover:text-orange  transition-colors'>پادکست ها</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-right cursor-pointer hover:text-orange  transition-colors'>تماس با ما</li>

                    </ul>
                    <ul className='w-[35%] h-[50%] flex flex-col items-center mt-[110px] max-md:mr-[10px] max-md:whitespace-nowrap'>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-right cursor-pointer hover:text-orange  transition-colors'>اساتید برتر</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-right cursor-pointer hover:text-orange  transition-colors'>دسته بندی ها</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-right cursor-pointer hover:text-orange  transition-colors'>خدمات</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-right cursor-pointer hover:text-orange  transition-colors'>ورود به حساب کاربری</li>

                    </ul>

                </div>

                {/* middle  */}
                <div className='w-[25%] h-full  flex flex-col'>
                    <div className='w-full h-[40%] flex justify-center items-center max-md:ml-5'>
                        <img src={Logo} alt="" className='rounded-full shadow-xl shadow-gray-600'/>
                    </div>
                    <div className='w-full h-[20%]  flex justify-center items-center max-md:ml-5 '>
                        <img src={Email} alt="" className='hover:shadow-lg hover:shadow-orange  transition-shadow rounded-2xl'/>
                    </div>
                    <div className='w-full h-[40%] flex flex-row justify-center items-center gap-5 mb-10 max-md:ml-5'>
                        <div className='w-[10%] h-[20%] rounded-full hover:shadow-lg hover:shadow-orange  transition-shadow'><FaTelegram className='w-full h-full '/></div>
                        <div className='w-[10%] h-[20%] rounded-full hover:shadow-lg hover:shadow-orange  transition-shadow'><FaFacebook className='w-full h-full'/></div>
                        <div className='w-[10%] h-[20%] rounded-full hover:shadow-lg hover:shadow-orange  transition-shadow'><FaInstagram className='w-full h-full'/></div>
                        <div className='w-[10%] h-[20%] rounded-full hover:shadow-lg hover:shadow-orange  transition-shadow'><FaLinkedin className='w-full h-full'/></div>

                    </div>
                </div>

                {/* right section  */}
                <div className='w-[40%] h-full  flex flex-col justify-center items-center '>
                    <div className='w-[300px] h-[100px]  mt-[100px] max-lg:mr-[250px] max-md:mr-[320px] max-md:w-[250px]'>
                        <img src={Desc} alt="" />
                    </div>
                    <div className='w-[300px] h-[100px] max-lg:mr-[250px] max-md:mr-[350px] max-md:w-[200px] '>
                        <img src={Address} alt="" />
                    </div>

                </div>



            </div>

          </div>  
          
        </div>  
  )
}

export default Footer
