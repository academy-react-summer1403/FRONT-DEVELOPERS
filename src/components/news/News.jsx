import React, { useEffect } from 'react'
import Img1 from "../../assets/landing/items1.png";
import Img2 from "../../assets/landing/items2.png";
import Img3 from "../../assets/landing/items3.png";
import Img4 from "../../assets/landing/items4.png";
import Img5 from "../../assets/landing/items5.png";
import Img6 from "../../assets/landing/items6.png";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';


import AOS from "aos";
import 'aos/dist/aos.css';

const News = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className='max-md:px-5 max-sm:px-1 flex items-center flex-col mt-[170px] h-[700px] max-md:h-[870px]'>

    {/* text section  */}
    <h1 className=' head1'>اخبار و مقالات
          <div className='head2'></div> </h1>
          <h3 className=' head3'>خـــودت رو با خـــبر کن !</h3>

    {/* body section  */}
        <div className='flex h-[474px] max-md:h-[870px] w-[1068px] max-md:w-full  justify-between max-xl:justify-center mt-10 max-sm:gap-2'>

          <div data-aos="fade-right" data-aos-duration="900" className=' w-[522px] max-sm:w-[200px] max-xl:w-[500px] max-md:w-full relative h-full flex justify-between max-xl:justify-center flex-wrap gap-5 max-sm:gap-1 max-xl:gap-3'>
            <div
              style={{boxShadow: "0px 2px 5px 0px #00000040",
                background:"url(https://s3-alpha-sig.figma.com/img/9c30/dd1c/f8af56fc7574b0826c5cc94ef1f6daf9?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SWiVzuCH-qlyVUuQwyf2N7JqFd8xhOsiOO0Urwfdlo~FB9EIrl-ykaH1Lf6fo-L~ligVZgYDZ8qMNxwo4tL5ePCcEkJb8DfKJY-jL6hENpffqLAvXRlj~5Riu~-V4G7sYbQSsOPzupmJ63gV7TP9yZetJHJRtGHY5Z-ZzWx3MA78KfYnblmtte~OWApenQTHDiilNnfdcQIVwq4c9fXaruGXH8rww80HPH8-Meh7SKjo2DzhVwBhwIusMnVr-tOYn8JL2mpkX3k1fPPvf0LcbBn9DX942OqwrZifuA9OuXC6cHGdpX08viccIkKEY5AsIralk9ZBiumgjrv7-ICISA__)",
                backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"
              }}
              className=' rounded-[15px] max-xl:w-[228px] max-xl:h-[228px] w-[250px] h-[250px] group max-md:absolute max-md:left-0 max-md:top-0 max-md:w-[280px] max-sm:w-[200px] max-sm:h-[200px]'
            >
              <div className=' border max-xl:w-[228px] max-xl:h-[228px]  border-[#b8b7b7] transform transition-all hover:backdrop-blur-sm rounded-[15px] max-md:w-[280px] max-sm:w-[200px] max-sm:h-[200px] w-[250px] h-[250px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}>
                 <h3 className='mt-[85%] mr-[6%] max-md:mt-[60%] max-xl:text-[13.5px] transform transition-all  group-hover:opacity-0 text-[14px] text-right font-semibold text-[#005B58] font-Yekan'>دنیای آنلاین؛ راهی برای افزایش فروش</h3></div>
               
                 <h3 className=' relative opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%] max-md:mt-[-45%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>

            </div>

            <div
              style={{boxShadow: "0px 2px 5px 0px #00000040",background:"url(https://s3-alpha-sig.figma.com/img/fb1f/2e12/fa271ebbdbed9dd068b976a36a369454?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9t40gpmDUuvK7fBazQhVFAYIWhbYW8hTKvgvzNp-KAdiLW73HSAb5RJx44GnfM79A~qQEUUIZM6f1kGI2nHA2KJ5r4Ur6g-fHHHfbBL~ABh-UpuzxPSv~NBpppdTnTOC53kdfuVv0BKj17pDsjQm1qCn81hSWXjKK3-5qIRd3M3l5AZjet6apTH5TkH~XFy1ZOmiOiD7EgJV4jkss47PzADTvrElTDLAF8VDkrJpC6qu9FePqsJNHH~dULVGFAKzVvTuWdN6NkUCJdc~2MXMgChIFF-2rS6rJTqLNGCqxS-aCXs6cnxek4ounYiT3FoJvBdz~uAmlr3gS0dzNMdDA__)",
                backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPositionX:"50%"
              }}
              className='  max-lg:absolute max-lg:bottom-0 max-md:left-0 max-md:bottom-0 rounded-[15px] max-md:top-60 max-md:w-[280px]   w-[250px] max-xl:w-[228px] max-xl:h-[228px] h-[250px] group max-sm:w-[200px] max-sm:h-[200px]'  >
                <div className=' border border-[#b8b7b7] max-xl:w-[228px] max-xl:h-[228px] transform transition-all hover:backdrop-blur-sm  max-md:w-[280px]  rounded-[15px]  w-[250px] h-[250px] max-sm:w-[200px] max-sm:h-[200px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}>
                <h3 className='mt-[80%] max-md:mt-[60%] mr-[6%] text-[15px] transform transition-all  group-hover:opacity-0 text-right font-semibold text-[#005B58] font-Yekan leading-[21px]'>بازاریابی حسی راهی ساده و کم هزینه 
                برای افزایش فروش</h3>
                <h3 className=' max-md:mt-[-40%] opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>

                </div>
            </div>


            <div
              style={{boxShadow: "0px 2px 5px 0px #00000040",background:"url(https://s3-alpha-sig.figma.com/img/5e73/b991/2271dcd8eb60c42cda58f1642e6503a8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gD5YCI7N342ybkSk5~B1QNkBUXdSE-oceMPBQ12elGlGRgSQKGXQoFiLbNeCforymf2dgPzqPwxlDmDdpspySbMB-CRjko5Vlj~TbNBVCIURD7bAy0TTSXDkeLi3KQuEdMyH4jWFWKUYI~Y1YghRG1uNssiY3n4Es5xBEjSMnafAgJI17BZwLof9IAAQazBfP7vLEejHt6Gnqpfdd1BW2u3UDfGjj-3dmNqTwczd5T4YxLPqdah-AHJRsjRRmcT38eDBpzuZy271PLqjWq7ydULWvddHpaAQRFj~6p6pnMbGbmuPsdhtv~FfI5j6k1id5Z9kq7VPRf-~UqeKME~YQw__)",
                backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPositionX:"0%"
              }}
              className='   max-lg:absolute max-lg:bottom-0  max-md:-bottom-0  max-lg:left-96  max-md:left-0   max-md:w-[280px] rounded-[15px] max-lg:w-[228px]  max-lg:h-[228px] max-xl:w-[480px] w-full h-[200px] group max-sm:w-[200px] max-sm:h-[200px]'  >
                <div className=' border border-[#b8b7b7] max-lg:w-[228px]  max-lg:h-[228px]  max-md:w-[280px] transform transition-all hover:backdrop-blur-sm rounded-[15px]  w-full h-[200px] max-sm:w-[200px] max-sm:h-[200px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}>
                <h3 className='mt-[30%] mr-[6%] max-md:mt-[60%]  max-xl:mt-[35%] max-lg:mt-[78%] text-[15px] transform transition-all  text-right group-hover:opacity-0 font-semibold text-[#005B58] font-Yekan leading-[21px]'>نیازهای مشتری را بشناسید تا درآمدتان بیشتر شود</h3>
                <h3 className='max-md:mt-[-40%] opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto mt-[-15%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>

                </div>
            </div>
            
          </div>

          <div data-aos="fade-left" data-aos-duration="900" className='w-[522px] max-sm:w-[200px] max-xl:w-[500px]  relative max-xl:gap-3 max-xl:justify-center h-full flex justify-between flex-wrap gap-5 max-sm:gap-1'>

            <div
              style={{boxShadow: "0px 2px 5px 0px #00000040",background:"url(https://s3-alpha-sig.figma.com/img/e327/308d/e71a796e2829aac9eb9d6e5a7221b150?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SkP76OuFtOjqkwvzYQMQ~O8EUss9r0Bau~jhSQWUwzbe6li9watsoIKFZmO8FuaP1WqDAQjOPQSxzdCapoWnxS~6P5WqNDDrX6ehPo7D7sHLdYzgsfd2A~jOqPe0Ql1PB1MTuMaHV7u~OgqvResRwB0QLUuWbs-YQ2FpzGQJp08h5DDN-WQC0386ANDEzqMdWg0JNBk3ZFDwRutMbST2DoPB7riaaVwCtCvGsyyxeLfwIp1Fsjg362nHs53kM1zPE2dWr7Y-VBkIsjWALhdD3QK9bt0mpFhcZlQWNx9GhuXpbwKs7s4VdGONeWOHMM6Tl3ZLvzL~j6hDuKuoyQTxAA__)",
                backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPositionX:"50%"
              }}
              className='   max-lg:absolute max-lg:left-32 max-md:left-0  max-md:w-[280px] max-lg:bottom-0  rounded-[15px]  max-lg:w-[228px]  max-lg:h-[228px] max-xl:w-[480px]  w-full h-[200px] group max-sm:w-[200px] max-sm:h-[200px]'   >
                <div className=' border max-lg:w-[228px]  max-lg:h-[228px] max-md:w-[280px] border-[#b8b7b7] rounded-[15px] transform transition-all hover:backdrop-blur-sm w-full h-[200px] max-sm:w-[200px] max-sm:h-[200px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}>
                
                  <h3 className='max-md:mt-[60%]  mt-[30%] max-xl:mt-[35%] max-lg:mt-[78%] mr-[6%] text-[15px] transform transition-all  group-hover:opacity-0 text-right font-semibold text-[#005B58] font-Yekan leading-[21px]'>نیازهای مشتری را بشناسید تا درآمدتان بیشتر شود</h3>
                  <h3 className='max-md:mt-[-40%]  opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto mt-[-15%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>
            
                </div>

            
            </div>

            <div
              style={{boxShadow: "0px 2px 5px 0px #00000040",background:"url(https://s3-alpha-sig.figma.com/img/5d93/e872/7f023368593e6eaee700ca9a187b7367?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DkKW3EMyu7lxS2r-zBqa6-4hk6uM7tQKznQ-pG780UOzxKAoZnpJM2dJKZZs~ufKLuPC~pvVheMRv8WEQQhsPdUI0xIxeHfHCvZVkJ4j3QcccORdF4UZmHCVfGuLHwXhHTLbCghYrJHCMAQyf-qLwNU5F4C8gNJQlsE9cxChz3fSIDJU-y6SL6mrp-Y~ObGgmSv1DdzlvSylOKd~-EY21oJJoCrjArKokuglnbAHttD~zR2nWYFlUAQCOJopBvsyMYQGdE7XSZuSwnjTRqGp727FO7dYI~nCy3XWObVs1Auhh1qR~HQrO3IQpXcQS95fAkNJmHqqsJMMM2bQ2jDiKw__)",
                backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"
              }}
              className='  max-lg:absolute max-lg:-left-[115px]  max-lg:top-0  max-md:left-0  rounded-[15px] max-xl:w-[228px] max-xl:h-[228px] w-[250px] h-[250px] group max-md:w-[280px] max-sm:w-[200px] max-sm:h-[200px]'  >
                <div className=' border border-[#d8d6d6] max-xl:w-[228px] max-xl:h-[228px]  rounded-[15px]  transform transition-all hover:backdrop-blur-sm  w-[250px] h-[250px] max-md:w-[280px] max-sm:w-[200px] max-sm:h-[200px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}><h3 className='mt-[80%] max-md:mt-[60%] transform transition-all  group-hover:opacity-0 mr-[7%] text-[14px] text-right font-semibold text-[#005B58] font-Yekan leading-[21px]'>ورود به دنیای آنلاین؛ راهی مطمئن برای
                افزایش فروش</h3>
                <h3 className='max-md:mt-[-40%] opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>
                </div>
            </div>

           <div
            style={{boxShadow: "0px 2px 5px 0px #00000040",background:"url(https://s3-alpha-sig.figma.com/img/5259/814f/8988440e86e65d5d8ca554513f16ef72?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gel9t8NLvzf~9UsErCJhM0QpEMLLEaZXBx47c8PxPfF2ubunf57eIFLEXhrko3gYVSGpvZiXSoDPQYP46lXyytxtDpmMuFi8QksCIzkvrpE04~TmbpaQF1HJPudzcPzbpqv7iji060j0If8OFKN0DeDz0LFBW1z6QZRRm56bR9UyZIKt12av-DE3cZ8~4cO8PPwUNm0aZ0SqR47fL3VR6VJcc0NbJKq6iAVBqZJwV5962EwMmPurIz4h-zinDevN79qqS63vrwSwCk3PFFF-VOgUGTMUHDlyVj7SDPizBTbX8tDKvlTYbcLIXUtUw8WiEHvnzAZ8M9iCqm-AmZZl2A__)",
              backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPositionX:"50%"
            }}
             className='max-lg:right-36  max-lg:absolute  rounded-[15px] max-md:left-0 max-md:top-60 max-xl:w-[228px] max-xl:h-[228px] w-[250px] h-[250px] group max-md:w-[280px] max-sm:w-[200px] max-sm:h-[200px]'  >
              <div className=' border border-[#b8b7b7] max-xl:w-[228px] max-xl:h-[228px] transform transition-all hover:backdrop-blur-sm  rounded-[15px] max-md:w-[280px]  w-[250px] h-[250px] max-sm:w-[200px] max-sm:h-[200px]' style={{background:" linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)"}}>
                
              <h3 className= 'transform max-md:mt-[65%] transition-al max-xl:text-[13.5px]  group-hover:opacity-0 mt-[85%] mr-[8%] text-[14px] text-right font-semibold text-[#005B58] font-Yekan'>جذب مشتری با تبلیغات دهان به دهان</h3>
              <h3 className='max-md:mt-[-40%] opacity-0 transform transition-all   group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal'>مطالعه مطلب</h3>
              </div>
           </div>

          </div>
            
        </div>   

        <div className='flex items-center gap-2    mx-auto mt-5 '>
          <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.84375 10.1875L1.15625 5.5L5.84375 0.8125" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <NavLink to={"/article-news"}>
              <h3 className=' text-right font-normal font-Yekan text-[18px] text-[#AAAAAA]'> مشاهده بیشتر</h3>
            </NavLink>
     

       
        </div>

        
    </div>
  )
}

export default News
