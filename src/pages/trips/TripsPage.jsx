import { useEffect, useState } from "react";
import Trip from "../../components/trip/Trip";
import MenuTrajet from "../../components/navbar/MenuTrajet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  tripsGetAll,
  tripsSearch,
} from "../../services/store/slices/tripsSlice";
import Spinner from "../../components/spinner/Spinner";
import { PlusIcon } from "@heroicons/react/24/solid";

const TripsPage = () => {
  const [tripsData, setTripsData] = useState([]);
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);
  const { data, isLoading, error } = useSelector(
    (state) => state.trips?.getAll
  );
  const tripsSearchData = useSelector((state) => state.trips?.search);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(tripsGetAll());
  }, []);

  useEffect(() => {
    if (data?.trips) {
      setTripsData(data?.trips);
    }
  }, [data]);

  useEffect(() => {
    if (tripsSearchData?.data) {
      setTripsData(tripsSearchData?.data?.trips);
    }
  }, [tripsSearchData]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      dispatch(tripsGetAll());
    } else {
      dispatch(
        tripsSearch([
          {
            field: "description",
            value: e.target.value,
            operator: "regex",
          },
        ])
      );
    }
  };

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
      <div className="flex justify-between items-center p-2 bg-white text-gray-700">
        <div className="">
          <form class="max-w-md mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Trouver un trajet
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Trouver un trajet"
                onChange={(e) => handleSearch(e)}
              />
            </div>
          </form>
        </div>
        <PlusIcon
          width="25px"
          height="25px"
          fill="#2eaa35"
          onClick={() => navigate("/add-trip")}
        />
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <MenuTrajet />
          {tripsData &&
            tripsData.map(
              ({
                _id,
                description,
                destinationId,
                originId,
                truckId,
                status,
                price,
                distance,
              }) => (
                <Trip
                  key={_id}
                  description={description}
                  originId={originId?.address}
                  destinationId={destinationId?.address}
                  truckname={truckId?.brand}
                  status={status}
                  price={price}
                  distance={distance}
                />
              )
            )}
        </>
      )}
    </>
  );
};

export default TripsPage;

