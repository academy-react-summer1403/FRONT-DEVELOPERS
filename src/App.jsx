
import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Landing from "./pages/landing/Landing"
import CourseDetial from "./pages/CourseDetail/CourseDetail"
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail"


function App() {


  return (
    <>
   <Layout>

     
<Routes> 
  
 <Route path="/" element={<Landing/>} />
<Route path="/coursedetail" element={<CourseDetial/>}/>
<Route path="/articledetail" element={<ArticleDetail/>}/>


</Routes>

</Layout>
    </>
  )
}

export default App
