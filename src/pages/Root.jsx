import { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Spinner from "../components/spinner/Spinner";

function Root() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const stepValue = params.get("step") ? params.get("step") : "step1";
  const { authData, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authData) {
      navigate(`/sign-up/${stepValue}`);
    }
  }, [authData]);
  return (
    <>
      <Header />
      <div className="explore">
        <main>{isLoading ? <Spinner /> : <Outlet />}</main>
      </div>
      {authData?.user?.isCompleted && <Navbar />}
    </>
  );
}

export default Root;
