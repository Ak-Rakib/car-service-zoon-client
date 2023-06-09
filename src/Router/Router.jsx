import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Error from "../Pages/Error/Error";
import HomeComponents from "../Pages/Home_Components/HomeComponents";
import Login from "../Pages/Login-Component/Login/Login";
import Register from "../Pages/Register-component/Register/Register";
import CheckOut from "../Pages/CheckOut-Components/CheckOut/CheckOut";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <HomeComponents></HomeComponents>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'checkOut/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/serviceZoon/${params.id}`)
            },
        ]
    }
]);