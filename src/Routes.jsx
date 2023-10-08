import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import LogIn from "./Components/LogIn";
import Register from "./Components/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('event.json')
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            }
        ]
    }
])

export default router; 