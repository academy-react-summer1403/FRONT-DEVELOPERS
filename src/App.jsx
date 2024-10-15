import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import DarkMode from "./components/DarkMode"





function App() {


  return (

 

    <div className=" overflow-hidden  bg-white dark:bg-gray-900 dark:text-white duration-200 ">
    <Navbar/>

      <Outlet/>
    
    
           <DarkMode className="bg-red-900" />   
    

    <Footer/>
    </div>

  )
}

export default App