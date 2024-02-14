import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Trajets from "../pages/Trajets";
import Garage from "../pages/Garage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import FrogotPassword from "../pages/FrogotPassword";
import TrajetDetails from '../pages/TrajetDetails';
import GarageDetails from '../pages/GarageDetails';
import Entretien from "../pages/Entretien";
import Documents from "../pages/Documents";
import TrajetsGarage from "../pages/TrajetsGarage";
import BilanCarbone from "../pages/BilanCarbone";
import EntretienDetail from "../pages/EntretienDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "trajets", element: <Trajets /> },
            { path: "garage", element: <Garage /> },
            { path: "sign-in", element: <SignIn /> },
            { path: "sign-up", element: <SignUp /> },
            { path: "forgotpassword", element: <FrogotPassword /> },
            { path: "trajet-detail", element: <TrajetDetails />},
            { path: "garage-detail", element: <GarageDetails />},
            { path: "entretien-garage", element: <Entretien />},
            { path: "documents-garage", element: <Documents />},
            { path: "trajets-garage", element: <TrajetsGarage />},
            { path: "bilan-carbone-garage", element: <BilanCarbone />},
            { path: "entretien-garage-detail", element: <EntretienDetail />}
        ]
    }
]);


export default router;