
import { createBrowserRouter,  RouterProvider } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import CoursPage from "./pages/cousrses/CoursPage"
import CourseDetial from "./pages/CourseDetail/CourseDetail"
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail"
import ArticlesNews from "./pages/articles and news/ArticlesNews"
import Dashboard from "./pages/dashboard/Dashboard"
import AuthRoot from "./AuthRoot"
import SignAuth from "./components/mainAuth/SignAuth"
import VarificationAuth from "./components/mainAuth/VarificationAuth"
import LoginAuth from "./components/mainAuth/LoginAuth"
import VorodAuth from "./components/mainAuth/VorodAuth"
import VarificationVorod from "./components/mainAuth/VarificationVorod"
import Layout from "./Layout"
import { useSelector } from "react-redux"
import Detail from "./Detail"




function App() {


const  originalRoutes = [
    {path:"/" , element:<Layout/> ,children:[

   {
      // index: true,
      path: "/",
      element: <Landing />,

    },
 
      {
        // index: true,
        path: "/courses",
        element: <CoursPage />,

      },
   
      {
        // index: true,
        path: "/article-news",
        element: <ArticlesNews />,

      },

    ]},

    {path:"/" , element:<Detail/> ,children:[

    {
      // index: true,
      path: "/courses-detail/:courseId",
      element: <CourseDetial />,
      // isAuth:false

    },
 
    {
      // index: true,
      path: "/article-detail/:id",
      element: <ArticleDetail />,
      // isAuth:false

    },


  ]},


  {
    // index: true,
    path: "/Dashboard",
    element: <Dashboard />,
    // isAuth:false
    
  },



    {
      path: "/auth",
      element: <AuthRoot />,
      // isAuth:false,
      children: [
        {
          // index:true,  
          path: "/auth",
          element: <SignAuth />,
 

        },
        {
          
          path: "/auth/2",
          element: <VarificationAuth />,


        },
        {
          path: "/auth/3",
          element: <LoginAuth />,


        },
        {
          path: "/auth/v1",
          element: <VorodAuth />,


        },
        {
          path: "/auth/v2",
          element: <VarificationVorod />,


        },
      ],
    },

]


 const user = useSelector((state) => state.TokenSlice)

 console.log("user" , user)


  const token = user?.token 
  console.log(token)

  const currentRoutes = originalRoutes;

  const router = createBrowserRouter(currentRoutes)


  return  <RouterProvider router={router}/>

}

export default App