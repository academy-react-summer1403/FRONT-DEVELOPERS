import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import CoursPage from "./pages/cousrses/CoursPage";
import CourseDetial from "./pages/CourseDetail/CourseDetail";
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail";
import ArticlesNews from "./pages/articles and news/ArticlesNews";
import AuthRoot from "./AuthRoot";
import SignAuth from "./components/mainAuth/SignAuth";
import VarificationAuth from "./components/mainAuth/VarificationAuth";
import LoginAuth from "./components/mainAuth/LoginAuth";
import VorodAuth from "./components/mainAuth/VorodAuth";
import VarificationVorod from "./components/mainAuth/VarificationVorod";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import DashPanel from "./components/dashboard/DashPanel";
import StdInformation from "./pages/dashboard/content/StdInformation";
import StdDashboard from "./pages/dashboard/content/StdDashboard";
import EditeProfileForm from "./components/dashboard/editeprofile/EditeProfileForm";
import StdCourses from "./pages/dashboard/content/StdCourses";
import ReservatCourses from "./pages/dashboard/content/ReservatCourses";
import StdPointOfView from "./pages/dashboard/content/StdPointOfView";
import StdSettings from "./pages/dashboard/content/StdSettings";
import StdFavorite from "./pages/dashboard/content/StdFavorite";
import NotFound from "./components/notFound/NotFound";
import Notfound from "./publicNotFound/notfound";
import Payment from "./components/Payment";
import Payment1 from "./components/Payment1";
import Paymentall from "./components/Paymentall";
import Game from "./pages/game/Game";
import QA from "./components/QA/QA";
import PhysicApp from "./pages/game/gameWithPhysics/PhysicApp";
import { useEffect } from "react";
import StdFavoriteNews from "./pages/dashboard/content/stdFavoriteNews";
import Suggestion from "./components/mainAuth/Suggestion";
import Q1 from "./components/mainAuth/Q1";
import Q2 from "./components/mainAuth/Q2";

import ForgetPassOne from "./components/mainAuth/forgetPassword/ForgetPassOne";
import ForgetPassTow from "./components/mainAuth/forgetPassword/ForgetPassTow";
import NewPage from "./pages/Newpage";
import Qfav1 from "./components/mainAuth/favfeacher/QA1";
import Qfeacher from "./components/mainAuth/favfeacher/Qfeacher";
import Qfav2 from "./components/mainAuth/favfeacher/QA2";
import Qfav3 from "./components/mainAuth/favfeacher/QA3";
import Chat from "./pages/Chat/Chat";
import MakeJob from "./pages/Job/MakeJob";

function App() {
  const PublicRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },

        {
          path: "/courses",
          element: <CoursPage />,
        },
        {
          path: "/courses-detail/:courseId",
          element: <Notfound />,
        },
        {
          path: "/article-news",
          element: <ArticlesNews />,
        },
        {
          path: "/article-detail/:id",
          element: <Notfound />,
        },
        {
          path: "/PhysicApp",
          element: <PhysicApp />,
        },
        {
          path: "/*",
          element: <PhysicApp />,
        },
        {
          path: "/Chat",
          element: <Chat />,
        },
      ],
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
          path: "/auth/2/:phoneNumber",
          element: <VarificationAuth />,
        },
        {
          path: "/auth/3",
          element: <LoginAuth />,
        },
        {
          path: "/auth/v1",
          element: <Game />,
        },
        {
          path: "/auth/v2/:phoneNumber/:password",
          element: <VarificationVorod />,
        },
        {
          path: "/auth/v3",
          element: <VorodAuth />,
        },
        {
          path: "/auth/forget1",
          element: <ForgetPassOne />,
        },
        {
          path: "/auth/forget2/:id",
          element: <ForgetPassTow />,
        },
      ],
    },
  ];

  const PrivateRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },

        {
          path: "/courses",
          element: <CoursPage />,
        },
        { path: "/oursuggestion", element: <NewPage /> },
        {
          path: "/article-news",
          element: <ArticlesNews />,
        },
        {
          path: "/courses-detail/:courseId",
          element: <CourseDetial />,
          ErrorBoundary: <NotFound />,
        },
        {
          path: "/article-detail/:id",
          element: <ArticleDetail />,
        },
        {
          path: "/QA",
          element: <QA />,
        },
        {
          path: "/PhysicApp",
          element: <PhysicApp />,
        },
        {
          path: "/*",
          element: <PhysicApp />,
        },
        {
          path: "/Chat",
          element: <Chat />,
        },
        {
          path: "/Job",
          element: <MakeJob />,
        },
      ],
    },
    {
      path: "/",
      element: <DashPanel />,

      children: [
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
          path: "/stdFavoriteNews",
          element: <StdFavoriteNews />,
        },

        {
          path: "/settings",
          element: <StdSettings />,
        },

        {
          path: "/payment/:courseId",
          element: <Payment />,
        },
        {
          path: "/payment1/:courseId",
          element: <Payment1 />,
        },
        {
          path: "/paymentall/:paymentId",
          element: <Paymentall />,
        },
        {
          path: "/*",
          element: <PhysicApp />,
        },
      ],
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
          element: <Game />,
        },
        {
          path: "/auth/v2",
          element: <VarificationVorod />,
        },
        {
          path: "/auth/v3",
          element: <VorodAuth />,
        },
        {
          path: "/auth/suggestion",
          element: <Suggestion />,
        },
        {
          path: "/auth/s1",
          element: <Q1 />,
        },
        {
          path: "/auth/s2",
          element: <Q2 />,
        },
        {
          path: "/auth/fav1",
          element: <Qfav1 />,
        },
        {
          path: "/auth/fav2",
          element: <Qfav2 />,
        },
        {
          path: "/auth/fav3",
          element: <Qfav3 />,
        },
        {
          path: "/auth/Qfeacher",
          element: <Qfeacher />,
        },
        { path: "/auth/forget1",
          element: <ForgetPassOne /> },
      ],
    },
  ];

  const user = useSelector((state) => state.TokenSlice);

  console.log("user", user);

  const token = user?.token;
  console.log(token);

  useEffect(() => {
    if (token == undefined) {
      localStorage.removeItem("token");
    }
  }, [token]);

  const currentRoutes = user.token == null ? PublicRoutes : PrivateRoutes;

  const router = createBrowserRouter(currentRoutes);

  return <RouterProvider router={createBrowserRouter(currentRoutes)} />;
}

export default App;
