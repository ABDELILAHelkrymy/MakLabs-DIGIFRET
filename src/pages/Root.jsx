import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

function Root() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    );
}

export default Root;