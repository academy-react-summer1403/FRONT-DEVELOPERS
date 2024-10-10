import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

<<<<<<< HEAD
import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Landing from "./pages/landing/Landing"
=======
>>>>>>> e2bc6f3078ddf1de989bd059195101b674e9dba1


function App() {


  return (
<<<<<<< HEAD
    <div className=" border overflow-x-hidden">
       <Layout>

     
<Routes> 
  
 <Route path="/" element={<Landing/>} />



</Routes>

</Layout>
    </div>
=======

 

    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar/>

      <Outlet/>
    
    <Footer/>
    </div>

>>>>>>> e2bc6f3078ddf1de989bd059195101b674e9dba1
  )
}

export default App
