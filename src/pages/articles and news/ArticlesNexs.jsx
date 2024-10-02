import React, { useState } from 'react' 

// images: 
import Herobg from '../../assets/articles and news/Ellipse 38.svg'
import Herovector from '../../assets/articles and news/hero.svg'
import Heroring from '../../assets/courses/Ellipse 4.svg'
import BackImg from "../../assets/courses/background.svg";
import SearchBar from '../../components/SearchBar';
import dropdown from '../../assets/courses/Frame(4).svg'
import List from '../../assets/courses/1221.svg'

//  , backdropFilter:" blur(4px)",boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.25"
import Pagination from '../../components/Pagination';


const ArticlesNexs = () => {
    const categories =[
        "جدید ترین",
        "محبوب ترین",
    ]
  

    return(
    <div className='container  z-10'>
        <img src={BackImg} alt=""  
          className='absolute w-96 left-[300px]  opacity-80 z-[-9999]'/>
          

        {/*  page hero */}
        <div style={{backgroundColor:"rgba(235,249,249,0.71)"}}
         className='flex flex-row  
        rounded-tl-lg rounded-tr-[80px] rounded-br-lg rounded-bl-[80px] my-10 px-4 
        max-md:flex-col 
        max-sm:flex-col
        max-lg:flex-col
        max-xl:flex-row  
        ' >
            {/* hero vector */}
            <div className=' w-full md:w-3/12
            max-lg:h-[400px]
            max-md:h-[400px]'>
                <img src={Herobg} alt=""  
                className="absolute w-[350px] 
                max-sm:left-[3%]
                max-md:w-[400px]  max-md:h-[400px] max-md:left-[20%]
                max-lg:left-[26%]
                max-xl:w-[350px]  left-[130px] top-[200px]  "
                />

                <img src={Herovector} alt="" 
                className=" absolute w-[435px] h-[435px]   left-[100px] top-[142px]  z-40 
                max-sm:left-[3%]
                max-md:w-[450px] max-md:h-[450px] max-md:left-[120px] max-md:top-[140px]
                max-lg:left-[23%]
                max-xl:w-[440px] max-xl:h-[440px] "            
                />

                <img src={Heroring} alt="" 
                className='absolute z-30 left-34 top-60 w-[470px] left-[60px] top-[310px]
                max-sm:left-[3%]
                max-md:w-[400px]  max-md:left-[20%]
                max-lg:left-[20%]
                max-xl:w-[470px]  '
                />
            </div>

            {/* text part */}
            <div className='grid justify-items-end w-full my-4 mt-8 h-90 relative
            max-sm:w-full max-sm:mx-auto
            max-md:w-full max-md:mx-auto
            '>

                <div className='flex flex-row-reverse mt-4 pt-6'>
                    <div className='relative w-3 h-3 bg-primary rounded-full top-4 ml-2'></div>
                    <h2 className='text-3xl font-bold dark:text-white'>اخبار و مقالات</h2>
                </div>
                <p className='mr-4 mt-6 text-xl text-gray-400 dark:text-gray-200'>با ما خودت رو به روز کن</p>
                {/* search box  */}
                <SearchBar placeholder={"...چی میخوای یاد بدونی؟"}/>
                
            </div>

        </div>

        {/* body of CoursPage */}
        <div className='my-32  grid grid-cols-4 gap-4
            max-md:flex flex-col-reverse
            max-sm:flex flex-col-reverse
           
        '>
            
            {/*right: offer section  */}
            

            {/*left: news section  */}
            <div className='relative border-2  col-span-3'>
                {/* top part */}
                <div className='relative flex flex-row'>
                    <div >
                        جدید ترین اخبار و مقالات
                    </div>
                    {/* menu  */}
                    <div className="group absolute right-0 " >
                        
                        <div className="group flex p-2 
                        rounded rounded-t-2xl shadow-sm shadow-gray-400 outline-none indent-1 border border-gray-100 font-medium 
                        text-gray-900 hover:bg-gray-50 cursor-pointer text-xl"
                        >
                            <img src={dropdown} 
                                className="relative top-1 h-5 w-5 mr-8 flex-none rotate-180 group-hover:rotate-0 
                                duration-300  group-data-[open]:rotate-180" />
                              جدید ترین
                            <img src={List}  
                            className="ml-6  " />
                        </div>
                        <div className='absolute z-[9999] hidden group-hover:block 
                            w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'
                        >
                            <ul className='space-y-2'>
                                {categories.map((item , index)=>(
                                    <li key={index} className='group'>
                                        <div 
                                        className='inline-block px-4 font-semibold text-gray-500
                                        hover:text-black dark:hover:text-white duration-200 p-2
                                        inline-block w-full hover:bg-primary rounded-md text-right
                                        group-data-[selected]:font-semibold cursor-pointer
                                        '
                                        >{item}</div>
                                    </li>            
                                ))
                                }
                            </ul>
                                    
                        </div>
                    </div>
                </div>

                {/* cards  */}
                <div className='grid-cols-3 mb-8'>
                   
                </div>

                {/* paginantion  */}
                <Pagination/>
            </div>
        </div>

    </div>
    )
}

export default ArticlesNexs