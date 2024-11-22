import React, { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

import AOS from "aos";
import 'aos/dist/aos.css';

const CommentsLoading = ({cards}) => {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    Array(cards).fill(0).map((_, i)=>(

    <SkeletonTheme key={i} baseColor="#cbd5e1" highlightColor="#f5f5f5" >
    <div data-aos="zoom-in-down" className='bg-[#F9F9F9] dark:bg-slate-800 rounded-[7px] w-full  p-[20.5px] mt-[30px]'>
        <div className='flex gap-3 justify-items-end border-b-2 pb-1 mb-2'>                   
            <p className='w-1/4 py-9 mr-20 '>
                <Skeleton height={"30px"}/>
            </p>
            <p className='w-1/2 pt-3'>
                <Skeleton count={2} className='mb-6'/>
            </p>
            <div >
                <Skeleton circle width={"80px"} height={"80px"}/>
            </div>

        </div>

        <p>
            <Skeleton count={3}  />
        </p>

       
    </div>

    </SkeletonTheme>
    
   ))

      
  
    
  )
}

export default CommentsLoading