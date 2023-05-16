import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Error from "../Pages/Error/Error";
import HomeComponents from "../Pages/Home_Components/HomeComponents";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <HomeComponents></HomeComponents>
            }
        ]
    }
]);