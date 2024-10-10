import React from 'react'
import Hero from '../../components/Hero/Hero'
import Famous from '../../components/famous/Famous'
import Learning from '../../components/learning/Learning'
import BestTeachers from '../../components/BestTeachers/BestTeachers'
import Products from '../../components/products/Products'
import News from '../../components/news/News'
import Pudcasts from '../../components/pudcasts/Pudcasts'
import { div } from 'framer-motion/m'


const Landing = () => {
  return (


    <div className=' overflow-hidden'>
        <Hero/>
        <Famous/>
        <Learning/>
        <BestTeachers/>
        <Products/>
        <News/>
        <Pudcasts/>
    </div>
  )
}

export default Landing
