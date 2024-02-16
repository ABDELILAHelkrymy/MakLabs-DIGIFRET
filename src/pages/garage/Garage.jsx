import { useEffect, useState } from "react";
import { Toast, toast } from "react-toastify";
import Spinner from "../../components/spinner/Spinner";
import Garage from "../../components/garage/Garage";


const Offers = () => {
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <div className="explore">
            <header>
            <p className="pageHeader">Garage</p>
            </header>
            <main>
                <Garage etat={false} />
                <Garage etat={true}/>
            </main>
        </div>

    );
};

export default Offers;
