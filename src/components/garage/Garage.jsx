import { react } from "react";
import { useNavigate } from "react-router-dom";
import {
  TruckIcon,
  CalendarDaysIcon,
  UserIcon,
  ArchiveBoxIcon,
  ArrowsUpDownIcon,
  ChevronDoubleRightIcon,
  PlayIcon,
  PlayPauseIcon,
  PlayCircleIcon,
  PauseCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import IvecoImg from "../../assets/img/garage/iveco.jpg";

const Garage = (props) => {
  const navigate = useNavigate();
  return (
    <Card className="mt-8">
      <CardHeader className="bg-purple-100 flex items-center">
        <Typography variant="small" color="blue-gray" className="p-2">
          IVECO - 2015
        </Typography>
      </CardHeader>
      <CardBody>
        <div className="garage flex justify-between text-xs">
          <div className="garage-content w-1/2">
            <img src={IvecoImg} />
          </div>
          <div className="actions flex flex-col justify-between w-1/2 items-end ">
            <div className="etat-trajet">
              {props.etat ? (
                <div className="flex items-center">
                  <div className="font-bold">Disponible</div>
                  <PlayCircleIcon width="25px" height="25px" fill="#2eaa35" />
                </div>
              ) : (
                <div className="flex items-center">
                  <div className="font-bold">En panne</div>
                  <PauseCircleIcon width="25px" height="25px" fill="#f8a72f" />
                </div>
              )}
            </div>
            <div className="text-right">
              <span>
                Localisé il y a 3 jours,
                <br /> à Casablanca
              </span>
            </div>
            <div className="detail-trajet">
              <ChevronDoubleRightIcon
                width="20px"
                height="20px"
                onClick={() => {
                  navigate("/garage-detail");
                }}
              />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default Garage;
