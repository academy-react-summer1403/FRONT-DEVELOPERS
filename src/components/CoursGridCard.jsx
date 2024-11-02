import React, { useEffect } from 'react'
import fima from '../assets/landing/figma.png'
import { NavLink } from 'react-router-dom'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Tilt from 'react-parallax-tilt';
import AOS from "aos";
import 'aos/dist/aos.css';

const CoursGridCard = ({title  , cost , teacherName , currentRegistrants ,tumbImageAddress, courseId}) => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <NavLink to={"/courses-detail/" + courseId}>
    <Tilt className='mt-[80px] max-2xl:-ml-6 mb-5 max-sm:-ml-8 grid justify-items-center'
    >
        <div data-aos="zoom-out-left"  data-aos-duration="900" className='relative rounded-[15px] w-[265px] max-xl:w-[230px] max-sm:w-[240px] max-sm:ml-2 max-md:h-[320px]  
        max-md:w-[255px] max-sm:h-[310px] h-[305px] dark:hover:bg-gray-600  max-xl:flex flex-wrap justify-center hover:bg-slate-50 
        bg-white px-4 dark:bg-gray-700/70'
            style={{boxShadow: "0px 1px 2px 0px #00000040"}
            }
        >  

            {/* card image   */}
            <div 
                style={{boxShadow:" 0px 1px 4px 0px #00000040" }}
                className='relative w-[233px] h-[150px] rounded-[10px]   top-[-20px]
              max-md:h-[130px]'
            >
                 {
                        tumbImageAddress ? 
                        <img src={tumbImageAddress}    className='rounded-xl w-full h-full'/>
                        :

                        <img className=' rounded-xl w-full h-full' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEXz9Pa5vsq2u8j29/jN0dno6u7V2N++ws3w8fTf4efi5OnFydPY2+HJztbR1txPmUB/AAAC0klEQVR4nO3b55aqMBiFYUoioXn/l3ukKSVBJGH4ctb7/JxRVrYbCDVJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArPLQ7g60YnSjwmoqc3eouarOwmsrOT026TXKu4NNyosCioloissSFndn6+VlNgwn6EY4LrKUsCnm7TCaNuiudFqoiIT9Spo9Ak+Hj77GWsKUMSasAi+2lJMwIeE5JPxLtoRGa8+xiU5YqX5urBuf4UlO+Eyn+br2OHaWm9DU2eeoK2tOL1Vuwucs4Is+u1SxCctlwLQ4O0SpCfN6fXpw9thZakK9qjDN1MmlSk24Xkm/jdG9sxWaMG82CXc3ROXe2UpN+PgpYbffbRwtCk3421qqug+7WpSa0Pywp5lmTnuLUhNaZgvHt4yafgx7i1ITbq4sOoeoZm3bWhSbcDHyF8d0YNRiVba0KDdhMj/yTl2Twep3sLQoOOGrnmn4hePEf9mg/acQnDDJK1V013Trh3HMdesGbS1KTpj0FzG0cQ3O0qClReEJd9ka3LYYb0LzdARcRYw3oavB9YoabUJ3g6sWY0241+CyxUgSmtWFqP0GFy3GkVCnhZ7vPdqvAT8txpAw10WazYf4vcFZizEk1P3fPy0eabD7xnC+JT9h12D/j3o8djvWYH83ufu4/IT6PeKhxYMNdqdSUSScGny3eLTBaBLqxaAL/W0ejC3hvMEh4uF8kSTU+xmiT7hp8L9L6NVgBAk9G4wgoWeD4hN6Nyg+oXeD0hPmxw9dYk24vX9IQhLem21AQhKS8H6hE8q+TtPdVvM1hJKaMBwS/iUSnpILSji+FaTCvgk83oer707XmR70uuTdNSXh3bX384hXvH8Yeus+x2ye1gtGxjukSVJdllBGhUn3QKL/wdpWJmQd7em2CLoV9ltiq0XsZia6fITVCCoQAAAAAAAAAAAAAAAAAAAAAAAAAAAAuMU/B0kslFd7c1EAAAAASUVORK5CYII='/>


                    }
                
            </div>

            {/* card body  */}
            <div className='relative top-[-10px]' >
                <h3 className=' text-[#444444] text-right text-[19px] line-clamp-1   max-md:text-[16px] font-Yekan font-bold mr-1 dark:text-white'>{title}</h3>

              <div className='  mt-6 mr-1'>
                <div className='  h-[17px] flex justify-between'>
        




            <h3 className='  flex h-full items-center gap-1 text-[16px] max-md:text-[14px] font-normal font-Yekan text-[#888888]'>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_90_164)">
<path d="M7.5 1.875L0.46875 5.625L7.5 9.375L14.5312 5.625L7.5 1.875Z" stroke="#AAAAAA" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.28125 7.125V10.3125C3.28125 11.3437 5.15625 12.6562 7.5 12.6562C9.84375 12.6562 11.7188 11.3437 11.7188 10.3125V7.125" stroke="#AAAAAA" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5312 5.625V11.7188" stroke="#AAAAAA" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_90_164">
<rect width="15" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
{currentRegistrants}

            </h3>

            <h3 className='  flex h-full items-center gap-1 text-[16px] max-md:text-[14px] font-normal font-Yekan text-[#888888]'>{teacherName}
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35378 4.25C9.35378 4.95448 9.08533 5.63011 8.6075 6.12825C8.12966 6.6264 7.48158 6.90625 6.80581 6.90625C6.13005 6.90625 5.48197 6.6264 5.00413 6.12825C4.5263 5.63011 4.25785 4.95448 4.25785 4.25C4.25785 3.54552 4.5263 2.86989 5.00413 2.37175C5.48197 1.8736 6.13005 1.59375 6.80581 1.59375C7.48158 1.59375 8.12966 1.8736 8.6075 2.37175C9.08533 2.86989 9.35378 3.54552 9.35378 4.25ZM1.71057 14.2503C1.73241 12.8565 2.27883 11.5275 3.23199 10.5499C4.18516 9.57237 5.4687 9.0245 6.80581 9.0245C8.14293 9.0245 9.42647 9.57237 10.3796 10.5499C11.3328 11.5275 11.8792 12.8565 11.9011 14.2503C10.3026 15.0144 8.56435 15.4087 6.80581 15.4063C4.98759 15.4063 3.26177 14.9926 1.71057 14.2503Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</h3>


                </div>


                <div className=' h-[17px] mt-2 flex justify-between'>

                   

               <div> <svg width="85" height="17" viewBox="0 0 85 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.64152 2.27369C7.95886 1.51082 9.04119 1.51082 9.35852 2.27369L10.8333 5.81961L14.6611 6.12703C15.4856 6.1929 15.8199 7.2214 15.1916 7.75974L12.2754 10.258L13.1658 13.9931C13.3578 14.7977 12.483 15.4331 11.7775 15.0024L8.50002 13.0007L5.22256 15.0024C4.51706 15.4331 3.64227 14.797 3.83423 13.9931L4.72461 10.258L1.8084 7.75974C1.18011 7.2214 1.51444 6.1929 2.33894 6.12703L6.16677 5.81961L7.64152 2.27369Z" fill="#FFC700"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6415 2.27369C24.9589 1.51082 26.0412 1.51082 26.3585 2.27369L27.8333 5.81961L31.6611 6.12703C32.4856 6.1929 32.8199 7.2214 32.1916 7.75974L29.2754 10.258L30.1658 13.9931C30.3578 14.7977 29.483 15.4331 28.7775 15.0024L25.5 13.0007L22.2226 15.0024C21.5171 15.4331 20.6423 14.797 20.8342 13.9931L21.7246 10.258L18.8084 7.75974C18.1801 7.2214 18.5144 6.1929 19.3389 6.12703L23.1668 5.81961L24.6415 2.27369Z" fill="#FFC700"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.6415 2.27369C41.9589 1.51082 43.0412 1.51082 43.3585 2.27369L44.8333 5.81961L48.6611 6.12703C49.4856 6.1929 49.8199 7.2214 49.1916 7.75974L46.2754 10.258L47.1658 13.9931C47.3578 14.7977 46.483 15.4331 45.7775 15.0024L42.5 13.0007L39.2226 15.0024C38.5171 15.4331 37.6423 14.797 37.8342 13.9931L38.7246 10.258L35.8084 7.75974C35.1801 7.2214 35.5144 6.1929 36.3389 6.12703L40.1668 5.81961L41.6415 2.27369Z" fill="#FFC700"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M58.6415 2.27369C58.9589 1.51082 60.0412 1.51082 60.3585 2.27369L61.8333 5.81961L65.6611 6.12703C66.4856 6.1929 66.8199 7.2214 66.1916 7.75974L63.2754 10.258L64.1658 13.9931C64.3578 14.7977 63.483 15.4331 62.7775 15.0024L59.5 13.0007L56.2226 15.0024C55.5171 15.4331 54.6423 14.797 54.8342 13.9931L55.7246 10.258L52.8084 7.75974C52.1801 7.2214 52.5144 6.1929 53.3389 6.12703L57.1668 5.81961L58.6415 2.27369Z" fill="#FFC700"/>
<path d="M76.1317 2.47841C76.1616 2.40533 76.2127 2.34281 76.2782 2.29882C76.3438 2.25482 76.421 2.23132 76.5 2.23132C76.579 2.23132 76.6562 2.25482 76.7218 2.29882C76.7874 2.34281 76.8384 2.40533 76.8683 2.47841L78.3736 6.0987C78.4017 6.16644 78.448 6.2251 78.5074 6.26821C78.5668 6.31133 78.6369 6.33723 78.71 6.34307L82.6186 6.65616C82.9721 6.68449 83.1151 7.12578 82.846 7.35599L79.8681 9.90741C79.8125 9.955 79.771 10.017 79.7483 10.0866C79.7256 10.1562 79.7224 10.2307 79.7392 10.3019L80.6494 14.1163C80.6677 14.1929 80.6629 14.2731 80.6357 14.3469C80.6084 14.4207 80.5598 14.4848 80.4962 14.531C80.4325 14.5772 80.3566 14.6036 80.2779 14.6067C80.1993 14.6098 80.1215 14.5895 80.0544 14.5484L76.7076 12.5049C76.6451 12.4667 76.5732 12.4465 76.5 12.4465C76.4268 12.4465 76.355 12.4667 76.2925 12.5049L72.9456 14.5491C72.8785 14.5902 72.8007 14.6105 72.7221 14.6074C72.6435 14.6043 72.5675 14.5779 72.5039 14.5317C72.4402 14.4855 72.3917 14.4214 72.3644 14.3476C72.3371 14.2738 72.3323 14.1936 72.3506 14.117L73.2608 10.3019C73.2777 10.2307 73.2746 10.1562 73.2518 10.0865C73.2291 10.0169 73.1876 9.95495 73.1319 9.90741L70.1541 7.35599C70.0941 7.30487 70.0506 7.23711 70.0292 7.16128C70.0078 7.08545 70.0094 7.00497 70.0337 6.93003C70.0581 6.85509 70.1041 6.78907 70.166 6.74031C70.2279 6.69156 70.3029 6.66227 70.3814 6.65616L74.29 6.34307C74.3631 6.33723 74.4333 6.31133 74.4926 6.26821C74.552 6.2251 74.5983 6.16644 74.6265 6.0987L76.1317 2.47841Z" stroke="#FFC700" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>



 <h3 className=' flex h-full items-center gap-1 text-[16px] max-md:text-[14px] font-normal font-Yekan text-[#888888]'>7:44



                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.00006 3V7H10.0001M13.0001 7C13.0001 7.78793 12.8449 8.56815 12.5433 9.2961C12.2418 10.0241 11.7999 10.6855 11.2427 11.2426C10.6855 11.7998 10.0241 12.2417 9.29616 12.5433C8.56821 12.8448 7.78799 13 7.00006 13C6.21213 13 5.43191 12.8448 4.70396 12.5433C3.97601 12.2417 3.31457 11.7998 2.75742 11.2426C2.20027 10.6855 1.75831 10.0241 1.45678 9.2961C1.15526 8.56815 1.00006 7.78793 1.00006 7C1.00006 5.4087 1.6322 3.88258 2.75742 2.75736C3.88264 1.63214 5.40876 1 7.00006 1C8.59136 1 10.1175 1.63214 11.2427 2.75736C12.3679 3.88258 13.0001 5.4087 13.0001 7Z" stroke="#888888" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</h3>
                </div>
              </div>

              <hr className=' my-3' />

              <div className='  h-[25px] flex items-center  justify-between'> 


            <div className=' h-full flex items-center gap-1'>
            <h3 className=' text-green text-[12px] max-md:text-[10px] font-Yekan font-normal mt-2 dark:text-[#01CEC9] '>تومان</h3>
            
            <h3 className='  text-green max-md:text-[20px] font-Yekan font-normal text-[23px] dark:text-[#01CEC9] '>
            {cost}
            </h3>

            
            </div>
            <MdOutlineAddShoppingCart className='w-8 h-8 text-green'/>

              </div>
                
                
                    
                   
               
            </div>
        </div>


       
    </Tilt>
    </NavLink>
  )
}

export default CoursGridCard