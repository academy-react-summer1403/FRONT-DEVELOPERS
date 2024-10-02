import React from 'react'

// images: 
import fima from '../../assets/courses/figma.svg'
import starbg from '../../assets/landing/stars.svg'
import star from '../../assets/courses/star2.svg'
import hat from '../../assets/landing/academic hat.svg'
import teacher from '../../assets/courses/Frame(1).svg'
import level from '../../assets/courses/Frame(2).svg'
import buy from '../../assets/landing/Rounded.svg'



const CoursListCard = () => {
  return (
    <div className='grid grid-cols-1 gap-4 mt-8 p-2 border-2
    max-sm:p-0
    max-md:p-0
    
    '>
        <div className='relative flex flex-row-reverse rounded-xl p-3 w-full gap-[2%] '
            style={{boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)"}
            }
        >   
            {/* card image   */}
            <div 
                style={{boxShadow:" 0px 1px 4px 0px rgba(0, 0, 0, 0.25)" }}
                className='relative grid justify-items-center py-4 right-0 w-[20%] 
                rounded-xl bg-gradient-to-tr from-purple to-secondary'
            >
                <img src={fima} className='w-[64px]'/>
            </div>

            {/* carde body  */}
            <div className='relative flex flex-row-reverse gap-4' >
                <div>
                    <h3 className='text-right text-xl font-semibold'>دوره پیشرفته دیزاین</h3>
                    <div className='flex flex-row-reverse text-sm text-gray-500'>
                        <img src={teacher} className='ml-1 relative top-1 w-[18px] h-[18px]'/>حامدنظر
                    </div>
                    <div className='flex flex-row-reverse text-sm text-gray-500'>
                        <img src={level} className='ml-1 relative top-1 w-[18px] h-[18px]'/>    مقدماتی                    
                    </div>
                </div>

                <div className='grid grid-cols-2 my-2 gap-3'>
                    <div className='flex text-gray-400 text-sm'>
                        <img src={hat} className='mr-1 relative top-[2px] w-[17px] h-[17px]'/>50
                    </div>
                    
                    <div className='flex flex-rows'> 
                         <img src={starbg} className='w-[18px] h-[18px]'/>
                         <img src={starbg} className='w-[18px] h-[18px]'/>
                         <img src={starbg} className='w-[18px] h-[18px]'/>
                         <img src={starbg} className='w-[18px] h-[18px]'/>
                         <img src={star} className='w-[18px] h-[18px]'/>
                    </div>
                   
                    
                </div>

                <div className='grid grid-cols-1 border-t-[1.5px] border' >
                    <img src={buy}/>
                    <div className='flex flex-row text-green text-lg'>
                        <p className='text-[10px]'>تومان</p>
                        1,450,000
                        
                    </div>
                </div>
            </div>
        </div> 




      


       
    </div>
  )
}

export default CoursListCard