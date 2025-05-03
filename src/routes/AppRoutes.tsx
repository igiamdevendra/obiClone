import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../pages/MasterLayout";
import Home from "../components/Home";
import Login from "../pages/Login";
import BookingForm from "../components/commonComponents/BookingForm";

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
            },
            {
                path: "/product-bundle",
                Component: BookingForm
            },
            {
                path: "/product-arrival",
                Component: BookingForm
            },
            {
                path: "/product-departure",
                Component: BookingForm
            }
        ]
    }
])

export default router;