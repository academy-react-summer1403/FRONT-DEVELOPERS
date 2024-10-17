import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import DarkMode from './components/DarkMode'

const Detail = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">

    <Navbar/>
     

    
       <Outlet/>
    <Footer/>
    <DarkMode/>
</div>
  )
}

export default Detail
