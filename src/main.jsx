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
    ],
  },

  {
    path: "/auth",
    element: <AuthRoot />,
    children: [
      {
        index: true,
        path: "/auth",
        element: <SignAuth />,
      },
      {
        path: "/authS2",
        element: <VarificationAuth />,
      },
      {
        path: "/authS3",
        element: <LoginAuth />,
      },
      {
        path: "/authV1",
        element: <VorodAuth />,
      },
      {
        path: "/authV2",
        element: <VarificationVorod />,
      },
    ],
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
