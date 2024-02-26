import { useEffect } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import GarageTruck from "../../components/garage/garage-truck/GarageTruck";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { trucksGetAll } from "../../services/store/slices/trucksSlice";

const GarageMain = () => {
  const dispatch = useDispatch();
  const trucksGetAllState = useSelector((state) => state.trucks.getAll);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect => DISPATCH : ", trucksGetAllState);
    dispatch(trucksGetAll());
  }, []);
  useEffect(() => {
    console.log("useEffect => trucksGetAllState : ", trucksGetAllState);
  }, [trucksGetAllState]);
  //   useEffect(() => {
  //     if (data) {
  //       console.log(data);
  //     }
  //   }, [data]);

  //   useEffect(() => {
  //     if (error) {
  //       console.log(error);
  //     }
  //   }, [error]);

  //   useEffect(() => {
  //     if (loading) {
  //       console.log("loading...");
  //     }
  //   }, [loading]);

  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Garage</p>
      </header>
      <main>
        <GarageTruck etat={false} />
        <GarageTruck etat={true} />
        <Button
          fullWidth
          className="mt-3 flex justify-center items-center gap-3 bg-purple-400"
          onClick={() => {
            navigate("/nouveau-camion");
          }}
        >
          <PlusCircleIcon height="25px" width="25px" className="" />
          Ajouter un camion
        </Button>
      </main>
    </div>
  );
};

export default GarageMain;
