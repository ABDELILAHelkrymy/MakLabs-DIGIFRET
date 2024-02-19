import { ChartPieIcon, CloudIcon, DocumentTextIcon, ExclamationTriangleIcon, MapIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, IdentificationIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Badge
  } from "@material-tailwind/react";

import IvecoImg from "../../assets/img/garage/iveco.jpg"
const GarageDetails = () => {
    const navigate = useNavigate();
    return (
        <div>
        {/* Page Header */}
        <div className="flex justify-between p-5 bg-white text-gray-700">
            <ChevronLeftIcon width="20px" height="20px" onClick={() => {navigate("/garage");}} />
            <div className="">IVECO - 2015</div>
            <PencilSquareIcon width="25px" height="25px" fill="#2eaa35"/>
        </div>
        {/* Page Content  */}
        <div className="explore">
            <Card className="mt-8 ">
                <CardHeader className="bg-purple-100 flex items-center">
                    <Typography variant="small" color="blue-gray" className="p-2">
                    IVECO - 2015
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
                            <IdentificationIcon  width="30px" height="30px"/>
                            <div>Chauffeur</div>
                        </div>
                    </Card>
                </div>
                <div className="w-1/2">
                    <Card className="m-2">
                        <div className="flex flex-col items-center p-5" onClick={() => {navigate('/entretien-garage')}}>
                            <Badge content="2"><ExclamationTriangleIcon  width="30px" height="30px"/></Badge>
                            <div>Entretien</div>
                        </div>
                    </Card>
                </div>
                <div className="w-1/2">
                    <Card className="m-2">
                        <div className="flex flex-col items-center p-5" onClick={() => {navigate('/documents-garage')}}>
                            <DocumentTextIcon  width="30px" height="30px"/>
                            <div>Documents</div>
                        </div>
                    </Card>
                </div>
                <div className="w-1/2">
                    <Card className="m-2">
                        <div className="flex flex-col items-center p-5" onClick={() => {navigate('/trajets-garage')}}>
                            <MapIcon  width="30px" height="30px"/>
                            <div>Trajets</div>
                        </div>
                    </Card>
                </div>
                <div className="w-1/2">
                    <Card className="m-2">
                        <div className="flex flex-col items-center p-5" onClick={() => {navigate('/bilan-carbone-garage')}}>
                            <CloudIcon  width="30px" height="30px"/>
                            <div>Bilan Carbone</div>
                        </div>
                    </Card>
                </div>
                <div className="w-1/2">
                    <Card className="m-2"> 
                        <div className="flex flex-col items-center p-5">
                            <ChartPieIcon  width="30px" height="30px"/>
                            <div>Statistiques</div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
      </div>
    );
};

export default GarageDetails;
