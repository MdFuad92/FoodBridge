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
import RequestFood from "../component/RequestFood";
import ManageFood from "../component/ManageFood";
import { Update } from "@mui/icons-material";
import Change from "../component/Change";



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
        },
        {
          path:'/manage',
          element:<PrivateRoute><ManageFood></ManageFood></PrivateRoute>,
         
       

        },
        { 
          path:'/change/:id',
          element:<Change></Change>,
          loader:({params})=> fetch(`http://localhost:5000/foods/${params.id}`)
       
        },
        {
          path:'/request',
          element:<PrivateRoute><RequestFood></RequestFood></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/food/${params.id}`)
        
        }
      ]
    },
  ]);

export default router;