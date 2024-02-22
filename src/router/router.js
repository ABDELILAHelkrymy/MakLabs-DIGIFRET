import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import TripsPage from "../pages/trips/TripsPage";
import Garage from "../pages/garage/Garage";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import FrogotPassword from "../pages/auth/FrogotPassword";
import TripDetailPage from '../pages/trips/TripDetailPage';
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
import NouveauEntretien from "../pages/garage/NouveauEntretien";
import Logout from "../pages/auth/Logout";
import AddGarage from "../pages/garage/AddGarage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { path: "trajets", element: <TripsPage /> },
            { path: "garage", element: <Garage /> },
            { path: "sign-in", element: <SignIn /> },
            { path: "sign-up/:step", element: <SignUp /> },
            { path: "logout", element: <Logout />},
            { path: "forgotpassword", element: <FrogotPassword /> },
            { path: "trajet-detail", element: <TripDetailPage />},
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
            { path: "nouvelle-tache-entretien", element: <NouveauEntretien />},
            { path: "nouveau-camion", element: <AddGarage />}
        ]
    }
]);


export default router;
