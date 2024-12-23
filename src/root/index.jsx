import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectRoute from "../components/protect-route";
const Home = lazy(() => import("../pages/home-page/index"));
const Login = lazy(() => import("../pages/login-page/index"));

export const root = createBrowserRouter([
  {
    path: "/",
    element: <ProtectRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
