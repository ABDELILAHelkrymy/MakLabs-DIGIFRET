import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  attachmentsSearch,
  clearAttachment,
} from "../../../services/store/slices/attachmentsSlice";
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
import IvecoImg from "../../../assets/img/garage/iveco.jpg";
import { donwloadLogo } from "../../../utils/download";
import { set } from "date-fns";

const GarageTruck = ({ id, status, brand, dateCirculation, nRegistration }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const attachmentsData = useSelector((state) => state.attachments?.search);
  const [logo, setLogo] = useState(null);

  // get the year based on date like that "2018-01-02T00:00:00.000Z"
  const getYear = (date) => {
    return new Date(date).getFullYear();
  };

  const CalcStatusColor = (status) => {
    switch (status) {
      case "Disponible":
        return "#2eaa35";
      case "En panne":
        return "#FF0000";
      case "En livraison":
        return "#f8a72f";
      default:
        return "bg-gray-200";
    }
  };

  useEffect(() => {
    const query = [
      {
        field: "entity",
        value: id,
      },
      {
        field: "type",
        value: "truck-logo",
      },
    ];
    dispatch(attachmentsSearch(query));
  }, [dispatch, id]);

  useEffect(() => {
    if (attachmentsData?.data?.attachments) {
      // get the files and put them in the right place
      const logos = attachmentsData?.data?.attachments.map(
        (attachment) => attachment
      );
      console.log("logos", logos);
      Promise.all(logos.map((logo) => donwloadLogo(logo))).then((urls) => {
        setLogo(urls[0]); // Assuming you want to set the first logo, you can modify this logic as needed
      });

      dispatch(clearAttachment());
    }
  }, [attachmentsData?.data?.attachments, dispatch, id]);

  return (
    <Card className="mt-8">
      <CardHeader className="bg-purple-100 flex items-center">
        <Typography variant="small" color="blue-gray" className="p-2">
          {brand} - {nRegistration} - {getYear(dateCirculation)}
        </Typography>
      </CardHeader>
      <CardBody>
        <div className="garage flex justify-between text-xs">
          <div className="garage-content w-1/2 ">
            <img src={logo} alt="" />
          </div>
          <div className="actions flex flex-col justify-between w-1/2 items-end ">
            <div className="etat-trajet">
              <div className="flex items-center">
                <div className="font-bold">{status}</div>
                <PlayCircleIcon
                  width="25px"
                  height="25px"
                  fill={CalcStatusColor(status)}
                />
              </div>
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
                  navigate(`/garage-detail/${id}`);
                }}
              />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default GarageTruck;

