import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  ArrowUpTrayIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody } from "@material-tailwind/react";

const Documents = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Page Header */}
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate("/garage-detail");
          }}
        />
        <div className="">Liste des documents</div>
        <ArrowUpTrayIcon
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
            <div
              className="flex p-3 border-b-[2px] items-center"
              onClick={() => {
                navigate("/entretien-garage-detail");
              }}
            >
              <div className="w-1/4 text-left">21/10</div>
              <div className="w-1/2 text-left">Facture 20220405</div>
              <div className="w-1/4 flex justify-end">
                <StarIcon
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  height="25px"
                  width="25px"
                />
              </div>
            </div>
            <div className="flex p-3 border-b-[2px] items-center">
              <div className="w-1/4 text-left">28/10</div>
              <div className="w-1/2 text-left">Carte grise</div>
              <div className="w-1/4 flex justify-end">
                <StarIcon height="25px" width="25px" />
              </div>
            </div>
            <div className="flex p-3 border-b-[2px] items-center">
              <div className="w-1/4 text-left">21/10</div>
              <div className="w-1/2 text-left">Assurance</div>
              <div className="w-1/4 flex justify-end">
                <StarIcon height="25px" width="25px" />
              </div>
            </div>
            <div className="flex p-3 border-b-[2px] items-center">
              <div className="w-1/4 text-left">21/10</div>
              <div className="w-1/2 text-left">Devis AAA-BBB-01</div>
              <div className="w-1/4 flex justify-end">
                <StarIcon
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  height="25px"
                  width="25px"
                />
              </div>
            </div>
            <div className="flex p-3 items-center">
              <div className="w-1/4 text-left">12/11</div>
              <div className="w-1/2 text-left">Facture 302019</div>
              <div className="w-1/4 flex justify-end">
                <StarIcon
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  height="25px"
                  width="25px"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Documents;
