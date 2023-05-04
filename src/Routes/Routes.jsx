import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NavBar from "../pages/SharedPages/Navbar/NavBar";
import Home from "../pages/Home/Home/Home";
import ChefPage from "../pages/ChefPage/ChefPage";
import Login from "../pages/AccessControl/Login/Login";
import Registration from "../pages/AccessControl/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'chef-page/:id',
                element: <PrivateRoute><ChefPage></ChefPage></PrivateRoute>,
                loader: ({params}) => fetch(`https://server-data-tajkir-alam.vercel.app/chef-about/${params.id}`)
            },
        ]
    }
]);

export default router;