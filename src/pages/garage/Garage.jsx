import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { Button } from "@material-tailwind/react";
import Garage from "../../components/garage/Garage";
import { useNavigate } from "react-router-dom";


const Offers = () => {
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="explore">
            <header>
            <p className="pageHeader">Garage</p>
            </header>
            <main>
                <Garage etat={false} />
                <Garage etat={true}/>
                <Button fullWidth className="mt-3 flex justify-center items-center gap-3 bg-purple-400" onClick={() => {navigate('/nouveau-camion')}}>
                    <PlusCircleIcon height="25px" width="25px" className=""/>
                    Ajouter un camion
                </Button>
            </main>
        </div>

    );
};

export default Offers;
