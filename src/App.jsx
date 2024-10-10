
import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Landing from "./pages/landing/Landing"


function App() {


  return (
    <div className=" border overflow-x-hidden">
       <Layout>

     
<Routes> 
  
 <Route path="/" element={<Landing/>} />



</Routes>

</Layout>
    </div>
  )
}

export default App
