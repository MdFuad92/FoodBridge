import {
  createBrowserRouter,

} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Home/Home";
import Login from "../AuthRoute/Login";
import Register from "../AuthRoute/Register";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
           path: '/login',
           element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

export default router;