import {
  createBrowserRouter,

} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Home/Home";
import Login from "../AuthRoute/Login";
import Register from "../AuthRoute/Register";
import AddFood from "../component/AddFood";



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
        },
        {
            path:'/add',
            element:<AddFood></AddFood>
        }
      ]
    },
  ]);

export default router;