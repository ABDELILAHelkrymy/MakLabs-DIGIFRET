import { react } from "react";
import { useNavigate } from "react-router-dom";
import {
  TruckIcon,
  ArchiveBoxIcon,
  ArrowsUpDownIcon,
  ChevronDoubleRightIcon,
  PlayIcon,
  PlayPauseIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const Trip = ({
  id,
  description,
  destinationId,
  originId,
  truckname,
  status,
  price,
  distance,
}) => {
  const navigate = useNavigate();
  const CalcStatusColor = (status) => {
    switch (status) {
      case "pending":
        return false;
      case "resolved":
        return true;
      default:
        return null;
    }
  };
  return (
    <Card className="mt-8">
      <CardHeader className="bg-purple-100 flex items-center">
        <Typography variant="small" color="blue-gray" className="p-2">
          {price} - {distance}
        </Typography>
      </CardHeader>
      <CardBody>
        <div className="trajet flex justify-between ">
          <div className="trajet-content w-3/4">
            <div className="traget-direction mb-5">
              <div>{originId}</div>
              <ArrowsUpDownIcon width="20px" height="20px" />
              <div>{destinationId}</div>
            </div>
            <div className="flex justify-between text-xs items-center">
              <div className="traget-material flex items-center w-1/2">
                <TruckIcon width="20px" height="20px" className="mr-2" />
                <span>{truckname}</span>
              </div>
              <div className="trajet-info flex items-center w-1/2">
                <ArchiveBoxIcon width="20px" height="20px" className="mr-2" />
                <span>3.5 tonnes</span>
              </div>
            </div>
          </div>
          <div className="actions flex flex-col justify-between">
            <div className="etat-trajet">
              {CalcStatusColor(status) ? (
                <PlayIcon width="25px" height="25px" fill="#2eaa35" />
              ) : (
                <PlayPauseIcon width="25px" height="25px" fill="#f8a72f" />
              )}
            </div>
            <div className="detail-trajet">
              <ChevronDoubleRightIcon
                width="20px"
                height="20px"
                onClick={() => {
                  navigate(
                    `/trajet-detail/?origin=${originId}&destination=${destinationId}`
                  );
                }}
              />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default Trip;

