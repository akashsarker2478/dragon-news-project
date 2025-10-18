import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

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
    }
   
])

export default router;