import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { maintenancesGetById } from "../../services/store/slices/maintenancesSlice";
import { attachmentsSearch } from "../../services/store/slices/attachmentsSlice";
import {
  ChevronLeftIcon,
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  CalendarDaysIcon,
  PencilSquareIcon,
  MapIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody } from "@material-tailwind/react";
import { handleDownload } from "../../utils/download";

// function to transform date like 2025-01-01T00:00:00.000Z to 01/01/2025
const transformDate = (date) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}`;
};

const TruckMaintenanceDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.maintenances?.getById
  );
  const attachments = useSelector((state) => state.attachments?.search);

  useEffect(() => {
    dispatch(maintenancesGetById(id));
  }, [id]);

  useEffect(() => {
    const query = [
      {
        field: "entity",
        value: id,
      },
    ];
    dispatch(attachmentsSearch(query));
  }, [dispatch, id]);

  return (
    <>
      {/* Page Header */}
      <div className="flex justify-between p-5 mb-3 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate(`/entretien-garage/${data?.maintenance?.truckId}`);
          }}
        />
        <div className="">Détail d'entretien</div>
        <PencilSquareIcon
          width="25px"
          height="25px"
          fill="#2eaa35"
          onClick={() => {
            navigate(`/modifier-tache-entretien/${id}`);
          }}
        />
      </div>
      {/* Page Content  */}
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
                <ArrowUpTrayIcon width="25px" height="25px" className="mr-2" />
                <span>Documents :</span>
              </div>
              <p className="w-full">
                {attachments &&
                  attachments?.data?.attachments?.map((attachment) => (
                    <div className="flex justify-between p-2">
                      <div className="text-right">{attachment.name}</div>
                      <div className="text-right">
                        <ArrowDownTrayIcon
                          width="25px"
                          height="25px"
                          fill="#2eaa35"
                          onClick={() => handleDownload(attachment)}
                        />
                      </div>
                    </div>
                  ))}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default TruckMaintenanceDetail;

