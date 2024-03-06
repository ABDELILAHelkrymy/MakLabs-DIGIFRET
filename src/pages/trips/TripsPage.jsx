import { useEffect, useState } from "react";
import Trip from "../../components/trip/Trip";
import MenuTrajet from "../../components/navbar/MenuTrajet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tripsGetAll } from "../../services/store/slices/tripsSlice";
import Spinner from "../../components/spinner/Spinner";

const TripsPage = () => {
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);
  const { data, isLoading, error } = useSelector(
    (state) => state.trips?.getAll
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(tripsGetAll());
  }, []);

  useEffect(() => {
    console.log({ data, isLoading, error });
  }, [data, isLoading, error]);

  if (error) {
    const errorMessage =
      authData?.user?.role === "transporter"
        ? "No Trucks in the garage under your responsability"
        : "You don't have any truck in your garage";
    <p className="text-red-500 text-center">{errorMessage}</p>;
  }

  return (
    <>
      <p className="pageHeader">Trajets</p>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <MenuTrajet />
          {data?.trips &&
            data.trips.map(({ _id, description, destinationId, originId, truckId, status }) => (
              <Trip
                key={_id}
                description={description}
                originId={originId.address}
                destinationId={destinationId.address}
                truckname={truckId.brand}
              />
            ))}
        </>
      )}
    </>
  );
};

export default TripsPage;
