import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
  CalendarDaysIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody } from "@material-tailwind/react";

const Entretien = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Page Titre */}
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate("/garage-detail");
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
              <span className="font-bold">Entretien et maintenance</span>
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

export default Entretien;
