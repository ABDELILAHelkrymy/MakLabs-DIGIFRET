import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Trajets from "../pages/trips/Trajets";
import Garage from "../pages/garage/Garage";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import FrogotPassword from "../pages/auth/FrogotPassword";
import TrajetDetails from '../pages/trips/TrajetDetails';
import GarageDetails from '../pages/garage/GarageDetails';
import Entretien from "../pages/garage/Entretien";
import Documents from "../pages/garage/Documents";
import TrajetsGarage from "../pages/garage/TrajetsGarage";
import BilanCarbone from "../pages/garage/BilanCarbone";
import EntretienDetail from "../pages/garage/EntretienDetail";
import ProviderCallback from '../components/ProviderCallback'
import PrivatePolicy from "../pages/PrivatePolicy";
import SuccesPage from "../pages/SuccesPage";
import Client from "../pages/client/Client";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { path: "trajets", element: <Trajets /> },
            { path: "garage", element: <Garage /> },
            { path: "sign-in", element: <SignIn /> },
            { path: "sign-up/:step", element: <SignUp /> },
            { path: "forgotpassword", element: <FrogotPassword /> },
            { path: "trajet-detail", element: <TrajetDetails />},
            { path: "garage-detail", element: <GarageDetails />},
            { path: "entretien-garage", element: <Entretien />},
            { path: "documents-garage", element: <Documents />},
            { path: "trajets-garage", element: <TrajetsGarage />},
            { path: "bilan-carbone-garage", element: <BilanCarbone />},
            { path: "entretien-garage-detail", element: <EntretienDetail />},
            { path: "/auth/google/callback", element: <ProviderCallback />},
            { path: "/private-policy", element: <PrivatePolicy />},
            { path: "/success", element: <SuccesPage />},
            { path: "client", element: <Client />},
        ]
    }
]);


export default router;
