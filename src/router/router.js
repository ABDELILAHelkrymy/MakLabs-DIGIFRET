import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Trajets from "../pages/Trajets";
import Garage from "../pages/Garage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import FrogotPassword from "../pages/FrogotPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "trajets", element: <Trajets /> },
            { path: "garage", element: <Garage /> },
            { path: "sign-in", element: <SignIn /> },
            { path: "sign-up", element: <SignUp /> },
            { path: "forgotpassword", element: <FrogotPassword /> }
        ]
    }
]);


export default router;