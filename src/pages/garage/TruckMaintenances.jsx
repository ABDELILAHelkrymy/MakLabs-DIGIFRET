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
import Spinner from "../../components/spinner/Spinner";
import MaintenanceType from "../../components/garage/maintenance/MaintenanceType";

const TruckMaintenances = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector(
    (state) => state.maintenances?.search
  );

  const query = [
    {
      key: "truckId",
      value: id,
    },
  ];
  useEffect(() => {
    dispatch(maintenancesSearch(query));
  }, [id]);

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
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {data?.maintenances &&
                  data.maintenances.map((maintenance) => (
                    <MaintenanceType
                      key={maintenance._id}
                      id={maintenance._id}
                      date={maintenance.date}
                      name={maintenance.maintenanceTypesId.name}
                    />
                  ))}
              </>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TruckMaintenances;

