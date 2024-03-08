import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { maintenancesGetById } from "../../services/store/slices/maintenancesSlice";
import {
  ChevronLeftIcon,
  ArrowUpTrayIcon,
  CalendarDaysIcon,
  PencilSquareIcon,
  MapIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody } from "@material-tailwind/react";

// function to transform date like 2025-01-01T00:00:00.000Z to 01/01/2025
const transformDate = (date) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

const TruckMaintenanceDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.maintenances?.getById
  );

  useEffect(() => {
    dispatch(maintenancesGetById(id));
  }, [id]);

  useEffect(() => {
    console.log(data.maintenance.maintenanceTypesId.name);
  }, [data, isLoading, error]);
  return (
    <>
      {/* Page Header */}
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate(`/entretien-garage/${id}`);
          }}
        />
        <div className="">Détail d'entretien</div>
        <PencilSquareIcon
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
              <span className="font-bold">Entretien et maintenance</span>
            </div>
            <div className="flex pb-6">
              <div className="text-left w-1/2">
                {data?.maintenance?.maintenanceTypesId?.name}
              </div>
              <div className="text-right w-1/2">
                {transformDate(data?.maintenance?.date)}
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-col mb-5 border-t-[2px]">
                <div className="font-bold flex items-center pb-2 pt-2">
                  <MapIcon width="25px" height="25px" className="mr-2" />
                  <span>Adresse :</span>
                </div>
                <p className="text-left">{data?.maintenance?.address}</p>
              </div>
              <div className="flex flex-col mb-5 border-t-[2px]">
                <div className="font-bold flex items-center  pb-2 pt-2">
                  <ArrowUpTrayIcon
                    width="25px"
                    height="25px"
                    className="mr-2"
                  />
                  <span>Documents :</span>
                </div>
                <p className="text-left">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TruckMaintenanceDetail;
