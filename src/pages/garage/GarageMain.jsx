import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import GarageTruck from "../../components/garage/garage-truck/GarageTruck";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { trucksGetAll } from "../../services/store/slices/trucksSlice";
import Spinner from "../../components/spinner/Spinner";

const GarageMain = () => {
  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const {authData} = useSelector((state) => state.auth);
  const {data, isLoading, error} = useSelector((state) => state.trucks?.getAll);
  const navigate = useNavigate();

  useEffect(() => {
      dispatch(trucksGetAll());
  }, []);

  useEffect(() => {
    console.log({data, isLoading, error});
  }
  , [data, isLoading, error]);

  if(error){
    const errorMessage = authData.role === "transporter" ? "No Trucks in the garage under your responsability" : "You don't have any truck in your garage";
    <p className="text-red-500 text-center">{errorMessage}</p>
  }

  return (
        <>
        <p className="pageHeader">Garage</p>
        {
          isLoading ? (
            <Spinner />
          ) : (
            <>
              {data?.trucks &&  data.trucks.map((truck) => (
                <GarageTruck key={truck._id} id={truck._id} status={truck.status} brand={truck.brand} dateCirculation={truck.dateOfCirculation} />
              ))}
            </>
          )
        }
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
        </>
  );
};

export default GarageMain;
