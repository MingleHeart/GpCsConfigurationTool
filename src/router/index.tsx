import {createBrowserRouter, RouteObject} from 'react-router-dom'
import AntHome from "pages/AntHome.tsx";
import AntContainer from "pages/AntContainer.tsx";

const routers: RouteObject[] = [
    {
        path: '/',
        element: <AntHome/>,
    },
    {
        path: "/container",
        element: <AntContainer/>,
    }
]

const router = createBrowserRouter(routers);

export default router;
