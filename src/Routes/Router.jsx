import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../components/NewsCard/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";
import Career from "../pages/Career";
import LoadingWarper from "../components/Loading/LoadingWarper";
import Loading from "../components/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    hydrateFallbackElement:<Loading></Loading>,
    children: [
      {
        index: true,
        element:<LoadingWarper>
          <Home></Home>
        </LoadingWarper>,
         loader: () => fetch('/news.json') 
      },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        element: <LoadingWarper>
          <CategoryNews></CategoryNews>
        </LoadingWarper>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
  },
  {
    path: "/about",
    element:<LoadingWarper>
      <About></About>
    </LoadingWarper>
  },
  {
    path:'/career',
    element:<LoadingWarper>
      <Career></Career>
    </LoadingWarper>
  }
]);

export default router;
