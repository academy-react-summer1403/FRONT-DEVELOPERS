import React, { useEffect, useState } from 'react'
import Famous from '../../components/famous/Famous'
import Learning from '../../components/learning/Learning'
import BestTeachers from '../../components/BestTeachers/BestTeachers'
import Products from '../../components/products/Products'
import News from '../../components/news/News'
import Pudcasts from '../../components/pudcasts/Pudcasts'
import Hero from '../../components/Hero/Hero'
import { useCourseLanding, usefeature1 } from '../../core/services/query/queries'






const Landing = () => {

  const getCourseCard = useCourseLanding()
 

  

  return (

    <div className=' overflow-hidden bg-white dark:bg-gray-900 dark:text-white duration-200 '>
 
    <div>

        <Hero/>
        <Famous/>
        <Learning getCourseCard={getCourseCard} h={"دوره های آموزشی"}/>
        <BestTeachers/>
        <Products/>
      
         <News/>
        <Pudcasts/>
        
    </div>
    </div>
  )
}

export default Landing
