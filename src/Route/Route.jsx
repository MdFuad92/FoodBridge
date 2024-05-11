import {
  createBrowserRouter,

} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Home/Home";
import Login from "../AuthRoute/Login";
import Register from "../AuthRoute/Register";
import AddFood from "../component/AddFood";
import PrivateRoute from "./PrivateRoute";
import Available from "../component/Available";
import FoodDetails from "../component/FoodDetails";



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
            element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
            path:'/available',
            element:<Available></Available>
        },
        {
          path:'/details/:id',
          element:<FoodDetails></FoodDetails>,
          loader:({params})=> fetch(`http://localhost:5000/foods/${params.id}`)
        }
      ]
    },
  ]);

export default router;