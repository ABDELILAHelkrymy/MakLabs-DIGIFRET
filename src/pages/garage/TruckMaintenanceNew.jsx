import React from "react";
import { useNavigate } from "react-router-dom";
import { Select, Option, Checkbox } from "@material-tailwind/react";
import {
  ChevronLeftIcon,
  UserIcon,
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  CalendarDaysIcon,
  MapIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody, Button, Input } from "@material-tailwind/react";
import CalendarElement from "../../components/CalendarElement";

const TruckMaintenanceNew = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Page Titre */}
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate("/garage");
          }}
        />
        <div className="">Nouvelle tâche d'entretien</div>
        <XMarkIcon
          width="25px"
          height="25px"
          fill="#000"
          onClick={() => {
            navigate("/entretien-garage");
          }}
        />
      </div>
      {/* Page Content  */}
      <div className="explore">
        <Card>
          <CardBody>
            <div className="flex items-center pb-6">
              <CalendarDaysIcon width="25px" height="25px" className="mr-2" />
              <span className="font-bold">Entretien et maintenance</span>
            </div>
            <div className="flex flex-col">
              <div className="mb-5">
                <CalendarElement />
              </div>
              <div className="mb-5">
                <Select variant="standard" label="Séléctionner un entretien">
                  <Option>Assurance</Option>
                  <Option>Visite technique</Option>
                  <Option>Fourrière</Option>
                </Select>
              </div>
              <div className="mb-5">
                <Input label="Total TTC DHS" />
              </div>
            </div>
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
                <UserIcon width="25px" height="25px" className="mr-2" />
                <span>Chauffeur responsable :</span>
              </div>
              <div>
                <Checkbox label="Ali HAMDANI" />
                <Checkbox label="Tarek GHAZOULI" />
              </div>
            </div>
            <div className="flex flex-col mb-5 border-t-[2px]">
              <div className="font-bold flex items-center  pb-2 pt-2">
                <ArrowUpTrayIcon width="25px" height="25px" className="mr-2" />
                <span>Documents :</span>
              </div>
              <p className="text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <Button
              fullWidth
              className="flex justify-center items-center gap-3 bg-purple-400"
            >
              <ArrowDownTrayIcon height="25px" width="25px" className="" />
              Enregister
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default TruckMaintenanceNew;

