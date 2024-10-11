import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"





function App() {


  return (

 

    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar/>

      <Outlet/>
    
    {/* <Footer/> */}
    </div>

  )
}

export default App
