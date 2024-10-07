import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/Landing.jsx";
import LoginAuth from "./components/mainAuth/LoginAuth.jsx";
import SignAuth from "./components/mainAuth/SignAuth.jsx";
import VarificationAuth from "./components/mainAuth/VarificationAuth.jsx";
import VorodAuth from "./components/mainAuth/VorodAuth.jsx";
import VarificationVorod from "./components/mainAuth/VarificationVorod.jsx";
import AuthRoot from "./AuthRoot.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CoursPage from "./pages/cousrses/CoursPage.jsx";
import CourseDetial from "./pages/CourseDetail/CourseDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Landing />,
      },
      {
        index: true,
        path: "/courses",
        element: <CoursPage />,
      },
      {
        index: true,
        path: "/courses-detail",
        element: <CourseDetial />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthRoot />,
    children: [
      {
        index:true,  
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

]);


const queryClient = new   QueryClient({
  defaultOptions:{queries:{retry:3 , retryDelay:1000}}
})



createRoot(document.getElementById("root")).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools/>
    </QueryClientProvider>
  </StrictMode>
);
