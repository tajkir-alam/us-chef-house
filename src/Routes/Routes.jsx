import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NavBar from "../pages/SharedPages/Navbar/NavBar";
import Home from "../pages/Home/Home/Home";
import ChefPage from "../pages/ChefPage/ChefPage";

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
                path: '/chef-page/:id',
                element: <ChefPage></ChefPage>,
                loader: ({params}) => fetch(`https://server-data-tajkir-alam.vercel.app/chef-about/${params.id}`)
            }
        ]
    },
]);

export default router;