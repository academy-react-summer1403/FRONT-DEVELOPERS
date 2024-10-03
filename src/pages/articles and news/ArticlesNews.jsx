 

// images: 
import Herobg from '../../assets/articles and news/Ellipse 38.svg'
import Herovector from '../../assets/articles and news/hero.svg'
import Heroring from '../../assets/courses/Ellipse 4.svg'
import BackImg from "../../assets/courses/background.svg";
import SearchBar from '../../components/SearchBar';
import dropdown from '../../assets/courses/Frame(4).svg'
import List from '../../assets/courses/1221.svg'

import Pagination from '../../components/Pagination';
import ArticleNewsCard from '../../components/articlesnews/ArticleNewsCard';
import OfferSection from '../../components/articlesnews/OfferSection';


const ArticlesNews = () => {
    const categories =[
        "جدید ترین",
        "محبوب ترین",
    ]
  

    return(
    <div className='container'>
        <img src={BackImg} alt=""  
          className='absolute w-[690px] left-[290px] 
           max-md:left-0
            max-sm:left-0
          opacity-80 z-[-9999]'/>

        {/*  page hero */}
        <div style={{backgroundColor:"rgba(235, 249, 249, 0.51)"}}
         className='flex flex-row  
        rounded-tl-lg rounded-tr-[90px] rounded-br-lg rounded-bl-[80px] my-10 px-4 shadow
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
                className="absolute w-[390px] top-[160px]
                max-sm:left-[3%]
                max-md:w-[400px]  max-md:h-[400px] max-md:left-[20%]
                max-lg:left-[26%]
                max-xl:w-[350px]  left-[115px] top-[200px]  "
                />

                <img src={Herovector} alt="" 
                className=" absolute w-[435px] h-[435px]   left-[80px] top-[112px]  z-40 
                max-sm:left-[-3%] max-sm:top-[110px] 
                max-md:w-[450px] max-md:h-[450px] max-md:left-[100px] max-md:top-[140px]
                max-lg:left-[19%]
                max-xl:w-[440px] max-xl:h-[440px] "            
                />

                <img src={Heroring} alt="" 
                className='absolute z-30 w-[470px] left-[75px] top-[280px]
                max-sm:left-[3%]
                max-md:w-[400px]  max-md:left-[20%]
                max-lg:left-[20%]
                max-xl:w-[470px]  '
                />
            </div>

            {/* text part */}
            <div className='grid justify-items-end w-full my-4 mr-6 h-90 relative
            max-sm:w-full max-sm:mx-auto
            max-md:w-full max-md:mx-auto
            '>

                <div className='flex flex-row-reverse mt-4 pt-5 '>
                    <div className='relative w-3 h-3 bg-primary rounded-full top-4 ml-2'></div>
                    <h2 className='text-3xl font-bold dark:text-white'>اخبار و مقالات</h2>
                </div>
                <p className='mr-5 mt-3 text-lg text-gray-400 dark:text-gray-200'>با ما خودت رو به روز کن</p>
                {/* search box  */}
                <SearchBar placeholder={"...چی میخوای یاد بدونی؟"}/>
                
            </div>

        </div>

        {/* body  */}
        <div className='my-28  grid grid-cols-4 gap-4
            max-md:flex flex-col-reverse
            max-sm:flex flex-col-reverse
           
        '>
            
            {/*right: offer section  */}
                
                <OfferSection/>
            

            {/*left: news section  */}
            <div className='relative col-span-3'>
                {/* top part */}
                <div className='relative flex flex-row-reverse'>
                    <div className='text-2xl font-semibold text-teal-900 p-2' >
                        جدید ترین اخبار و مقالات
                    </div>
                    {/* menu  */}
                    <div className="group " >
                        
                        <div className="group flex px-5 py-2 mr-4 gap-6
                        rounded-full shadow-sm shadow-gray-400 outline-none indent-1 border border-gray-100
                        text-gray-900 hover:bg-gray-50 cursor-pointer text-lg"
                        >
                            <img src={dropdown} 
                                className="relative mt-1 h-5 w-5 flex-none 
                               " />
                              جدید ترین
                            <img src={List}   className="w-5 h-5 mt-1" />
                           
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

                <div className='grid grid-cols-3 my-8
                    max-sm:grid-cols-1
                    max-md:grid-cols-2 
                    max-lg:grid-cols-2 
                '>
                   <ArticleNewsCard/>
                </div>

                <Pagination/>
            </div>
        </div>

    </div>
    )
}

export default ArticlesNews