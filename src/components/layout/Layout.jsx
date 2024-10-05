import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'



const Layout = ({children}) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar/>
      {children}
        <Footer/>
    </div>
  )
}
export default Layout
