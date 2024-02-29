import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
  CalendarDaysIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody } from "@material-tailwind/react";
import { maintenancesSearch } from "../../services/store/slices/maintenancesSlice";
import { useDispatch, useSelector } from "react-redux";

const TruckMaintenances = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();

  const {data, isLoading, error} = useSelector((state) => state.maintenances.search);

  const query = [
    {
      key: "truckId",
      value: id,
    },
  ]
  useEffect(() => {
    dispatch(maintenancesSearch(query));
  }, [id]);

  useEffect(() => {
    console.log({data, isLoading, error});
  }, [data, isLoading, error]);

  return (
    <>
      {/* Page Titre */}
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate(`/garage-detail/${id}`);
          }}
        />
        <div className="">Liste des entretiens</div>
        <PlusIcon
          width="25px"
          height="25px"
          fill="#2eaa35"
          onClick={() => {
            navigate("/nouvelle-tache-entretien");
          }}
        />
      </div>
      {/* Page Content  */}
      <div className="explore">
        <Card className="overflow-hidden">
          <CardBody className="text-center">
            <div className="flex items-center pb-6">
              <CalendarDaysIcon width="25px" height="25px" className="mr-2" />
              <span className="font-bold">Maintenance et Entretien</span>
            </div>
            <div className="flex p-3 border-b-[2px] items-center">
              <div className="w-1/3 text-left">21/04</div>
              <div className="w-1/3 text-left">Réparation</div>
              <div className="w-1/3 flex justify-end">
                <ChevronDoubleRightIcon
                  width="25px"
                  height="25px"
                  onClick={() => {
                    navigate("/entretien-garage-detail");
                  }}
                />
              </div>
            </div>
            <div className="flex p-3  border-b-[2px] items-center">
              <div className="w-1/3 text-left">15/12</div>
              <div className="w-1/3 text-left">Visite Technique</div>
              <div className="w-1/3 flex justify-end">
                <ChevronDoubleRightIcon width="25px" height="25px" />
              </div>
            </div>
            <div className="flex p-3 items-center">
              <div className="w-1/3 text-left">28/10</div>
              <div className="w-1/3 text-left">Assurance</div>
              <div className="w-1/3 flex justify-end">
                <ChevronDoubleRightIcon width="25px" height="25px" />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TruckMaintenances;
