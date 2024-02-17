import { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Spinner } from "@material-tailwind/react";

function Root() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const stepValue = params.get("step") ? params.get("step") : "step1";
  const { authData, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (!authData) {
      navigate(`/sign-up/${stepValue}`);
    }
  }, [authData]);
  return (
    <>
      <Header />
      {isLoading ?
        <div className="flex justify-center items-center h-screen">
          <Spinner color="light-blue" size="xl" />
        </div>
        : <Outlet />
      }
      {authData?.user?.isCompleted && <Navbar />}
    </>
  );
}

export default Root;
