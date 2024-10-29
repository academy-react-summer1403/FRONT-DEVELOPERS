
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
import NavbarBasket from "./components/Basket/NavbarBasket"
import DashPanel from "./components/dashboard/DashPanel"
import StdInformation from "./pages/dashboard/content/StdInformation"
import StdDashboard from "./pages/dashboard/content/StdDashboard"
import EditeProfileForm from "./components/dashboard/editeprofile/EditeProfileForm"
import StdCourses from "./pages/dashboard/content/StdCourses"
import ReservatCourses from "./pages/dashboard/content/ReservatCourses"
import StdPointOfView from "./pages/dashboard/content/StdPointOfView"
import StdSettings from "./pages/dashboard/content/StdSettings"
import StdFavorite from "./pages/dashboard/content/StdFavorite"





function App() {


const  PublicRoutes = [
    {path:"/" , element:<Layout/> ,children:[

   {
      path: "/",
      element: <Landing />,
    },
 
      {
        path: "/courses",
        element: <CoursPage />,
      },
      {
        path: "/article-news",
        element: <ArticlesNews />,
      },

    ]},
    {
      path: "/auth",
      element: <AuthRoot />,
      
      children: [
        {
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




const  PrivateRoutes = [
  {path:"/" , element:<Layout/> ,children:[

 {
    path: "/",
    element: <Landing />,
  },

    {
      path: "/courses",
      element: <CoursPage />,
    },
    {
      path: "/article-news",
      element: <ArticlesNews />,
    },
    {
      path: "/courses-detail/:courseId",
      element: <CourseDetial />,
    },
    {
      path: "/article-detail/:id",
      element: <ArticleDetail />,
    },  
    {
      path: "/basket",
      element: <NavbarBasket />,
    },

  ]},
{
 
  path: "/",
  element: <DashPanel />,
  
  children:[
{
  path: "/Dashboard",
  element: <StdDashboard />,
},
{
  path: "/info",
  element: <StdInformation />,
},
{
  path: "/Edit",
  element: <EditeProfileForm />,
},
{
  path: "/stdCourses",
  element: <StdCourses />,
},
{
  path: "/reservCourses",
  element: <ReservatCourses />,
},
{
  path: "/stdPointOfView",
  element: <StdPointOfView />,
},
{
  path: "/stdFavorite",
  element: <StdFavorite />,
},
{
  path: "/settings",
  element: <StdSettings />,
},

  ]
  
},
  {
    path: "/auth",
    element: <AuthRoot />,
  
    children: [
      {
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


  const currentRoutes = user.token==null ? PublicRoutes : PrivateRoutes

  const router = createBrowserRouter(currentRoutes)


  return <RouterProvider  router={router}/>
  
  
  

}

export default App