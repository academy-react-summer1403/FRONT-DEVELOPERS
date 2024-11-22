import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import DarkMode from './components/DarkMode'
import SpeechBot from './components/speech/Speech'
import HomeOfAssistant from './components/3DAssistant/HomeOfAssistant'

const Layout = () => {
 
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 ">
      

        <Navbar/>
          <Outlet/>
        <Footer  />
        
        <DarkMode />
        <SpeechBot />
        
      
      
    </div>
  )
}

export default Layout
