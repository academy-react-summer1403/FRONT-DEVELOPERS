import React, { useEffect, useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { useMyCourses } from '../../../core/services/query/DashboardQuery';
import { ImageErrore } from '../../ImageErrore';
import { FiDollarSign } from "react-icons/fi";
import DateApi from '../../DateApi';
import NotFound from '../../notFound/NotFound';


const ListMap = ({search , category}) => {



  const getMyCourses = useMyCourses();
  console.log(getMyCourses.data?.listOfMyCourses)

  

  return (
    <div>
      {category == "همه" ? <>
      
        {getMyCourses.data?.listOfMyCourses.filter((f)=>{
              return search.toLowerCase()===' ' ? f : f.courseTitle.toLowerCase().includes(search)}) == "" ?<div className='relative w-96 flex mx-auto'> <NotFound/> </div>:
              getMyCourses.data?.listOfMyCourses.filter((f)=>{
                return search.toLowerCase()===' ' ? f : f.courseTitle.toLowerCase().includes(search)}).map((item) =>(
  
            <ul  style={{boxShadow:" 0px 1px 1px 0px rgba(0,0,0,0.1)"}}
              className={`relative grid grid-cols-7 gap-9 justify-end  mt-3 rounded-md text-[11px] text-center 
                text-gray-600 font-medium justify-items-center dark:text-white
              ${  2 ===0 ? "bg-gray-100/60 dark:bg-gray-50" : "bg-cyan-50/60 dark:bg-cyan-100/70"}                                          
              `}>
                <li className='col-1 flex gap-6'>
                <NavLink to={"/courses-detail/"+ item?.courseId}  className='col-1'>
                  <IoEyeOutline className='text-orange mt-4 w-5 h-5 cursor-pointer 
                  max-md:mt-2 max-md:ml-2
                  ' />            
                </NavLink> 

                  <NavLink to={"/payment/" + item?.courseId}>

                    <FiDollarSign  className='text-green  mt-4 w-4 h-4 cursor-pointer -ml-4
                      max-md:mt-2 max-md:ml-2
                      '  />
                  </NavLink>
                </li>
                

                <li className='col-1 my-5 mr-4 '>{item?.paymentStatus}</li>
                
                <li className='col-1 my-5'>{item?.cost}</li>
                <li className='col-1 my-5'> <DateApi dateapi={item?.lastUpdate} /></li>
                <li className='col-1 my-5'>{item?.fullName}</li>
              
                <li className='col-1 my-5'>{item?.courseTitle}</li>

              
              
               
                <li className='col-1'>
                  <img
                    src={item?.tumbImageAddress ? item?.tumbImageAddress : <ImageErrore/>} onError={ImageErrore}
                 
                    alt=""
                    className='rounded-full border w-12 h-12 shadow-md my-1'
                  ></img>
                </li>
               
              </ul>
            ))} 
      
      
      </> :  <>
      {
        getMyCourses.data?.listOfMyCourses.filter((i)=>{
          return category.toLowerCase()==="همه" ? i : i.paymentStatus.includes(category)}) == "" ? <NotFound/>:
          
          getMyCourses.data?.listOfMyCourses.filter((i)=>{
            return category.toLowerCase()==="همه" ? i : i.paymentStatus.includes(category)}).map((item) =>(
              <ul  style={{boxShadow:" 0px 1px 1px 0px rgba(0,0,0,0.1)"}}
              className={`relative grid grid-cols-7 gap-9 justify-end  mt-3 rounded-md text-[11px] text-center 
                text-gray-600 font-medium justify-items-center dark:text-white
              ${  2 ===0 ? "bg-gray-100/60 dark:bg-gray-50" : "bg-cyan-50/60 dark:bg-cyan-100/70"}                                          
              `}>
                <li className='col-1 flex gap-6'>
                <NavLink to={"/courses-detail/"+ item?.courseId}  className='col-1'>
                  <IoEyeOutline className='text-orange mt-4 w-5 h-5 cursor-pointer 
                  max-md:mt-2 max-md:ml-2
                  ' />            
                </NavLink> 

                  <NavLink to={"/payment/" + item?.courseId}>

                    <FiDollarSign  className='text-green  mt-4 w-4 h-4 cursor-pointer -ml-4
                      max-md:mt-2 max-md:ml-2
                      '  />
                  </NavLink>
                </li>
                

                <li className='col-1 my-5 mr-4 '>{item?.paymentStatus}</li>
                
                <li className='col-1 my-5'>{item?.cost}</li>
                <li className='col-1 my-5'> <DateApi dateapi={item?.lastUpdate} /></li>
                <li className='col-1 my-5'>{item?.fullName}</li>
              
                <li className='col-1 my-5'>{item?.courseTitle}</li>

              
              
               
                <li className='col-1'>
                  <img
                    src={item?.tumbImageAddress ? item?.tumbImageAddress : <ImageErrore/>} onError={ImageErrore}
                 
                    alt=""
                    className='rounded-full border w-12 h-12 shadow-md my-1'
                  ></img>
                </li>
               
              </ul>

                ))    
      }
      
      
      </>}

         
          
    </div>
  )
}

export default ListMap