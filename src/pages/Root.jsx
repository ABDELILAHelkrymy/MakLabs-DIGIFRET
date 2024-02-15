import { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Spinner from "../components/spinner/Spinner";

function Root() {
    const navigate = useNavigate();
    const { step } = useParams();
    const params = new URLSearchParams(window.location.search);
    const stepValue = params.get("step");
    const { authData, loading } = useSelector((state) => state.user);

    useEffect(() => {
        if (!authData) {
            navigate(`/sign-up/${stepValue}`);
        }
    }, [authData]);
    return (
        <>
            <Header />
            {loading && <Spinner />}
            <Outlet />
            {authData && <Navbar />}
        </>
    );
}

export default Root;
