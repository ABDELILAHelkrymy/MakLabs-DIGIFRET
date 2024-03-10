import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import GarageTruck from "../../components/garage/garage-truck/GarageTruck";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  trucksGetAll,
  trucksSearch,
} from "../../services/store/slices/trucksSlice";
import Spinner from "../../components/spinner/Spinner";
import { set } from "date-fns";

const GarageMain = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  const { authData } = useSelector((state) => state.auth);
  const { data, isLoading, error } = useSelector(
    (state) => state.trucks?.getAll
  );

  const trucksSearchData = useSelector((state) => state.trucks?.search);

  const [truckData, setTruckData] = useState([]);

  const query = [
    {
      key: "brand",
      value: searchData,
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(trucksGetAll());
  }, [dispatch]);

  useEffect(() => {
    if (data?.trucks) {
      setTruckData(data?.trucks);
    }
  }, [data]);

  useEffect(() => {
    if (trucksSearchData?.data) {
      console.log(trucksSearchData?.data?.trucks);
    }
  }, [trucksSearchData]);

  if (error) {
    const errorMessage =
      authData?.user?.role === "transporter"
        ? "No Trucks in the garage under your responsability"
        : "You don't have any truck in your garage";
    <p className="text-red-500 text-center">{errorMessage}</p>;
  }

  return (
    <>
      <p className="pageHeader">Garage</p>
      <form class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Trouver un camion
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
            placeholder="Trouver un camion"
            onChange={(e) => {
              e.preventDefault();
              setSearchData(e.target.value);
              dispatch(trucksSearch(query));
              setTruckData(trucksSearchData?.data?.trucks);
            }}
          />
        </div>
      </form>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data?.trucks?.length === 0 && (
            <p className="text-center">
              {authData?.user?.role === "transporter"
                ? "Vous n'avez pas de camion dans votre garage"
                : "Aucun camion dans le garage"}
            </p>
          )}
          {truckData &&
            truckData.map(({ _id, status, brand, dateOfCirculation }) => (
              <GarageTruck
                key={_id}
                id={_id}
                status={status}
                brand={brand}
                dateCirculation={dateOfCirculation}
              />
            ))}
        </>
      )}
      {authData?.user?.role === "transporter" && (
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
      )}
    </>
  );
};

export default GarageMain;

