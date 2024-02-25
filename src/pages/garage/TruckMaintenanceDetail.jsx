import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  ArrowUpTrayIcon,
  CalendarDaysIcon,
  PencilSquareIcon,
  MapIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody } from "@material-tailwind/react";

const TruckMaintenanceDetail = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Page Header */}
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate("/entretien-garage");
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
              <div className="text-left w-1/2">Réparation</div>
              <div className="text-right w-1/2">21/02</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-col mb-5 border-t-[2px]">
                <div className="font-bold flex items-center pb-2 pt-2">
                  <MapIcon width="25px" height="25px" className="mr-2" />
                  <span>Adresse :</span>
                </div>
                <p className="text-left">
                  73 bd d' Anfa ang. 1 rue Close de Provence 2°ét. bur. 202
                  Gauthier Arr. Maarif- Casablanca - Maroc
                </p>
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
