import React from 'react'
import { NavLink } from 'react-router-dom'

// image:
import newsImage from '../../assets/articles and news/Rectangle 95.svg'
import seenIcon from '../../assets/articles and news/Frame(1).svg'
import calenderIcon from '../../assets/articles and news/Frame.svg'
import flash from '../../assets/articles and news/Frame(2).svg'


const ArticleNewsCard = () => {
  return (
    
        <div className='bg-white relative grid-col-1 rounded-t-full shadow px-6 z-
            
        '>
            <img src={newsImage}/>

            <div className='py-4 '>
                <h3 className='text-lg font-medium text-teal-900 text-right'>انگولار بهتر است یا ریکت؟</h3>

                <p className='text-xs text-gray-400 text-right my-4'>طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و
                    بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود
                </p>

                <div className='relative flex flex-row-reverse my-4'>
                    <div className='flex flex-row gap-1 text-xs text-gray-500'>
                        56بازدید
                        <img src={seenIcon} />
                    </div>
                    <div className='absolute left-0 flex flex-row-reverse gap-1 text-xs text-gray-500'>
                        1403/02/03
                        <img src={calenderIcon}/>
                    </div>
                </div>

                <NavLink to={"#"} className='flex justify-center pt-2 gap-1 text-xs font-medium text-orange border-t-[1px]'> 
                    <img src={flash} className='m-1'/>مطالعه بیشتر
                    
                </NavLink>
            </div>   

        </div>
  )
}

export default ArticleNewsCard