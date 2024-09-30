
import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Landing from "./pages/landing/Landing"
import CourseDetial from "./pages/CourseDetail/CourseDetail"


function App() {


  return (
    <>
   <Layout>

     
<Routes> 
  
 <Route path="/" element={<Landing/>} />
<Route path="/coursedetail" element={<CourseDetial/>}/>
</Routes>

</Layout>
    </>
  )
}

export default App
