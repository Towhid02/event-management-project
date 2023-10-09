import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import LogIn from "./Components/LogIn";
import Register from "./Components/Register";
import Details from "./Pages/Details";
import Error from "./Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        
        loader: () => fetch('event.json'),
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('event.json')
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
                loader: () => fetch('event.json')
            },
            {
                path: '/register',
                element: <Register></Register>,
                loader: () => fetch('event.json')
            },
            {
                path: '/details:id',
                element: <Details></Details>,
                loader: () => fetch('event.json')
            }
        ]
    }
])

export default router; 