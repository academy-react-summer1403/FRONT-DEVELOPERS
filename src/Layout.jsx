import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import DarkMode from './components/DarkMode'

const Layout = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">

        <Navbar/>
          <Outlet/>
          
          <DarkMode/>
        <Footer/>
      
    </div>
  )
}

export default Layout
