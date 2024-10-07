import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"




function App() {


  return (

 

    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    

      <Outlet/>
      

    <Footer/>
    </div>

  )
}

export default App
