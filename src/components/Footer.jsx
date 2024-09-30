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




// const FooterImg = {

//     backgroundImage:`url(${FooterLogo})`,
//     backgroundPosition:"50%",
//     backgroundReapet:"no-repeat",
//     backgroundSize:"cover",
//     height:"100%",
//     width:"100%"
// }

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
    <div className='flex-1  h-[400px]  '>

        <div className='flex justify-center items-center rounded-xl h-[500px]  relative'>
            <img src={FooterLogo} alt=""  className=' w-full  h-full mx-auto'/>

            <div className='flex flex-row justify-center items-center w-[1300px] h-[400px]  absolute top-[100px]'>

                {/* left section  */}
                <div className='w-[40%] h-full  flex flex-row justify-center items-center'>
                    <div className='w-[35%] h-[50%]  mt-[110px]'>
                        <img src={Brand} alt="" />
                    </div>
                    <ul className='w-[35%] h-[50%] flex flex-col items-center mt-[110px]'>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-center'>دوره ها</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-center'>اخبار و مقالات</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-center'>پادکست ها</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-center'>تماس با ما</li>

                    </ul>
                    <ul className='w-[35%] h-[50%] flex flex-col items-center mt-[110px]'>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-center'>اساتید برتر</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-center'>دسته بندی ها</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-center'>خدمات</li>
                        <li className='w-full h-[20%]  font-sans text-md text-green/70 text-center'>ورود به حساب کاربری</li>

                    </ul>

                </div>

                {/* middle  */}
                <div className='w-[25%] h-full  flex flex-col'>
                    <div className='w-full h-[40%] flex justify-center items-center'>
                        <img src={Logo} alt="" className='rounded-full shadow-xl shadow-gray-600'/>
                    </div>
                    <div className='w-full h-[20%]  flex justify-center items-center'>
                        <img src={Email} alt="" />
                    </div>
                    <div className='w-full h-[40%] flex flex-row justify-center items-center gap-5 mb-10'>
                        <div className='w-[10%] h-[20%] rounded-full '><FaTelegram className='w-full h-full'/></div>
                        <div className='w-[10%] h-[20%] rounded-full '><FaFacebook className='w-full h-full'/></div>
                        <div className='w-[10%] h-[20%] rounded-full '><FaInstagram className='w-full h-full'/></div>
                        <div className='w-[10%] h-[20%] rounded-full '><FaLinkedin className='w-full h-full'/></div>

                    </div>
                </div>

                {/* right section  */}
                <div className='w-[40%] h-full  flex flex-col justify-center items-center '>
                    <div className='w-[300px] h-[100px]  mt-[100px]'>
                        <img src={Desc} alt="" />
                    </div>
                    <div className='w-[300px] h-[100px]  '>
                        <img src={Address} alt="" />
                    </div>

                </div>



            </div>

          </div>  
          
        </div>  
  )
}

export default Footer
