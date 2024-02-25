import { useState, useEffect } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { Button } from "@material-tailwind/react";
import Garage from "../../components/garage/Garage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGarageTrucks } from "../../services/app/garage/garageActions";


const Offers = () => {
    const dispatch = useDispatch();
    const { garageTrucks, loading, error } = useSelector((state) => state.garage);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(garageTrucks);
    }, [garageTrucks]);

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
