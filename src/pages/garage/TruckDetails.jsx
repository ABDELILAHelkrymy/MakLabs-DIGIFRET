import { useEffect, useState } from "react";
import {
  ChartPieIcon,
  CloudIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  MapIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { ChevronLeftIcon, IdentificationIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Badge,
} from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { trucksGetById } from "../../services/store/slices/trucksSlice";

import IvecoImg from "../../assets/img/garage/iveco.jpg";
const TruckDetails = () => {
  const [truckData, setTruckData] = useState({
    brand: "",
    type: "",
    status: "",
    model: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);
  const trucksGetByIdState = useSelector((state) => state.trucks.getById);
  const { id } = useParams();

  useEffect(() => {
    dispatch(trucksGetById(id));
  }, [id]);

  // get the year based on date like that "2018-01-02T00:00:00.000Z"
  const getYear = (date) => {
    return new Date(date).getFullYear();
  };

  const handleUpdateRedirect = () => {
    navigate(`/update-truck/?id=${id}`);
  };

  useEffect(() => {
    if (trucksGetByIdState?.data) {
      setTruckData({
        brand: trucksGetByIdState.data.truck.brand,
        type: trucksGetByIdState.data.truck.type,
        status: trucksGetByIdState.data.truck.status,
        model: getYear(trucksGetByIdState.data.truck.dateOfCirculation),
      });
    }
  }, [trucksGetByIdState]);
  return (
    <div>
      {/* Page Header */}
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate("/garage");
          }}
        />
        <div className="">
          {truckData.brand} - {truckData.model}
        </div>
        <PencilSquareIcon
          width="25px"
          height="25px"
          fill="#2eaa35"
          onClick={handleUpdateRedirect}
        />
      </div>
      {/* Page Content  */}
      <Card className="mt-8 ">
        <CardHeader className="bg-purple-100 flex items-center">
          <Typography variant="small" color="blue-gray" className="p-2">
            {truckData.brand} - {truckData.model}
          </Typography>
        </CardHeader>
        <CardBody>
          <div className="garage flex justify-between text-xs">
            <div className="garage-content w-1/2 p-2">
              <img src={IvecoImg} />
            </div>
            <div className="flex w-1/2 flex-col justify-around p-2">
              <div className="flex flex-col items-start">
                <div className="flex items-center font-bold">
                  <IdentificationIcon width="25px" height="25px" />
                  <span>Dépenses</span>
                </div>
                <div>DHS 1234</div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center font-bold">
                  <IdentificationIcon width="25px" height="25px" />
                  <span>Chiffre d'affaire</span>
                </div>
                <div>DHS 5630</div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      {/* Bloc actions */}
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <Card className="m-2">
            <div className="flex flex-col items-center p-5">
              <IdentificationIcon width="30px" height="30px" />
              <div>Chauffeur</div>
            </div>
          </Card>
        </div>
        <div className="w-1/2">
          <Card className="m-2">
            <div
              className="flex flex-col items-center p-5"
              onClick={() => {
                navigate(`/entretien-garage/${id}`);
              }}
            >
              <Badge content="2">
                <ExclamationTriangleIcon width="30px" height="30px" />
              </Badge>
              <div>Entretien</div>
            </div>
          </Card>
        </div>
        <div className="w-1/2">
          <Card className="m-2">
            <div
              className="flex flex-col items-center p-5"
              onClick={() => {
                navigate(`/documents-garage/${id}`);
              }}
            >
              <DocumentTextIcon width="30px" height="30px" />
              <div>Documents</div>
            </div>
          </Card>
        </div>
        <div className="w-1/2">
          <Card className="m-2">
            <div
              className="flex flex-col items-center p-5"
              onClick={() => {
                navigate(`/trajets-garage/${id}`);
              }}
            >
              <MapIcon width="30px" height="30px" />
              <div>Trajets</div>
            </div>
          </Card>
        </div>
        <div className="w-1/2">
          <Card className="m-2">
            <div
              className="flex flex-col items-center p-5"
              onClick={() => {
                navigate(`/bilan-carbone-garage/${id}`);
              }}
            >
              <CloudIcon width="30px" height="30px" />
              <div>Bilan Carbone</div>
            </div>
          </Card>
        </div>
        <div className="w-1/2">
          <Card className="m-2">
            <div className="flex flex-col items-center p-5">
              <ChartPieIcon width="30px" height="30px" />
              <div>Statistiques</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TruckDetails;

