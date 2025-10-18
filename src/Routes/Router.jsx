import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../components/NewsCard/NewsDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>,
            },
            {
                path:'/category/:id',
                loader:()=>fetch('/news.json'),
                element:<CategoryNews></CategoryNews>
            }
        ],
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/news-details/:id',
        element:<NewsDetails></NewsDetails>,
        loader:()=>fetch('/news.json'),
    }

   
])

export default router;