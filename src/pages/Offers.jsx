import { useEffect, useState } from "react";
import { Toast, toast } from "react-toastify";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";


const Offers = () => {
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <div className="category">
            <header>
                <p className="pageHeader">Offers</p>
            </header>
        </div>
    );
};

export default Offers;
