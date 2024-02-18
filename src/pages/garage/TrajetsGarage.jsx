import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import Trajet from "../../components/trajet/Trajet"

const TrajetsGarage = () => {
    const navigate = useNavigate();

    return (
        <>
        {/* Page Header */}
        <div className="flex justify-between p-5 bg-white text-gray-700">
            <ChevronLeftIcon width="20px" height="20px" onClick={() => {navigate("/garage-detail");}} />
            <div className="">Liste des trajets</div>
            <ArrowUpTrayIcon width="25px" height="25px" fill="none"/>
        </div>
        {/* Page Content  */}
        <div className="explore">
            <Trajet etat={false} />
            <Trajet etat={true} />
            <Trajet etat={true} />
        </div>
        </>
    );
};

export default TrajetsGarage;
