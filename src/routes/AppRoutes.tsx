import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../pages/MasterLayout";
import Home from "../components/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MasterLayout,
        children : [
            {
                path: "/",
                Component : Home
            },
            {
                path: "/subscriber-login",
                Component : Login
            }
        ]
    }
])

export default router;