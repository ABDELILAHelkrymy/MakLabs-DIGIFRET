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
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);
  const { data, isLoading, error } = useSelector(
    (state) => state.trucks?.getAll
  );

  const trucksSearchData = useSelector((state) => state.trucks?.search);

  const [truckData, setTruckData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(trucksGetAll());
  }, [dispatch]);

  useEffect(() => {
    if (data?.trucks) {
      setTruckData(data?.trucks);
    }
  }, [data]);

  const getDefaultData = () => {
    if (data?.trucks) {
      setTruckData(data?.trucks);
    }
  };

  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      getDefaultData();
    } else {
      setSearchInput(e.target.value);
    }
  };

  useEffect(() => {
    if (trucksSearchData?.data) {
      setTruckData(trucksSearchData?.data?.trucks);
    }
  }, [trucksSearchData]);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("searchInput", searchInput);
    if (searchInput === "") {
      getDefaultData();
    } else {
      dispatch(
        trucksSearch([
          {
            field: "brand",
            value: searchInput,
            operator: "regex",
          },
        ])
      );
      setSearchInput(""); // clear the search input
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
      <p className="pageHeader">Garage</p>
      <div class="max-w-md mx-auto">
        <form onSubmit={handleSearch}>
          <div
            class="flex items-center max-w-md mx-auto bg-white rounded-lg "
            x-data="{ search: '' }"
          >
            <div class="w-full">
              <input
                type="search"
                class="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                placeholder="search"
                x-model="search"
                onChange={handleSearchChange}
              />
            </div>
            <div>
              <button
                type="submit"
                class="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
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

          {truckData.length === 0 &&
            trucksSearchData &&
            trucksSearchData?.data?.trucks?.length === 0 && (
              <p className="text-center">Not found</p>
            )}
          {truckData &&
            truckData.map(
              ({ _id, status, brand, dateOfCirculation, nRegistration }) => (
                <GarageTruck
                  key={_id}
                  id={_id}
                  status={status}
                  brand={brand}
                  dateCirculation={dateOfCirculation}
                  nRegistration={nRegistration}
                />
              )
            )}
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
