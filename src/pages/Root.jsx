import { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Spinner from "../components/spinner/Spinner";

function Root() {
    const navigate = useNavigate();
    const { authData, loading } = useSelector((state) => state.user);
    useEffect(() => {
        if (!authData) {
            navigate("/sign-up/step1");
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
