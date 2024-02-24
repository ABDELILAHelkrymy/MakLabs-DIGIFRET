
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/solid";
import Trip from "../../components/trip/Trip"

const RetourTrajet = () => {

    const navigate = useNavigate();

    return (
        <>
        {/* Page Titre */}
        <div className="flex justify-between p-5 bg-white text-gray-700">
            <ChevronLeftIcon width="20px" height="20px" onClick={() => {navigate("/garage-detail");}} />
            <div className="">Trajet de retour</div>
            <PlusIcon width="25px" height="25px" fill="#2eaa35" onClick={() => {navigate('/nouvelle-tache-entretien')}}/>
        </div>
        {/* Page Content  */}
        <div className="explore">
            <Trip etat={false} points={{origin: "Fes, Morocco", destination: "Rabat, Morocco"}}/>
            <Trip etat={false} points={{origin: "Fes, Morocco", destination: "Rabat, Morocco"}}/>
            <Trip etat={false} points={{origin: "Fes, Morocco", destination: "Rabat, Morocco"}}/>
        </div>
        </>
    )
}
export default RetourTrajet ;