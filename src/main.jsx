import { Strictmode } from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home.jsx"
import PublicLayout from "./layout/PublicLayout.jsx"
import About from "./pages/About.jsx"
import Explore from "./pages/Explore.jsx"
import Login from "./pages/Login.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },

      {
        path: "/about",
        element: <About />
      },

      {
        path: "/explore",
        element: <Explore />
      },

      {
        path: "/login",
        element: <Login/> 
      }
    ]
  },
]);

export default router



createRoot(document.getElementById("root")).render(
  <strictMode>
   <RouterProvider router={router} />,
  </strictMode>,
)