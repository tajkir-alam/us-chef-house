import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NavBar from "../pages/SharedPages/Navbar/NavBar";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ]
    },
]);

export default router;