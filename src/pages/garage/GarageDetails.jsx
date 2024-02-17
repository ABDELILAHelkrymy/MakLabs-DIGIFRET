import { ChartPieIcon, CloudIcon, DocumentTextIcon, ExclamationTriangleIcon, MapIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Toast, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, IdentificationIcon, ArrowUpTrayIcon, ArchiveBoxIcon, ArrowDownTrayIcon, ChevronDoubleRightIcon, PlayIcon, PlayPauseIcon, PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/solid";
import {
    Chip,
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
        <>
        {/* Page Header */}
        <div className="flex justify-between p-5 bg-white">
            <ChevronLeftIcon width="20px" height="20px" onClick={() => {navigate("/garage");}} />
            <div className="">IVECO - 2015</div>
            <PencilSquareIcon width="25px" height="25px"/>
        </div>
        {/* Page Content  */}
        <Card className="overflow-hidden rounded-none border-b-[2px]">
            <div className="image-garage-detail">
                <img src={IvecoImg} className="w-full"/>
            </div>
            <div className="mb-2 p-2 w-full bg-purple-200 text-white font-bold" >
                <span>IVECO - 2015</span>
            </div>
            <CardBody className="text-center">
                <div className="flex flex-col">
                    <div className="flex flex-col items-start mb-5">
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
            </CardBody>
        </Card>
        {/* Bloc actions */}
        <Card className="overflow-hidden rounded-t-none min-h-svh">
          <CardBody>
            <div className="garage-detail flex justify-between items-end flex-wrap">
                <div className="flex w-1/2 flex-col items-center p-5">
                    <IdentificationIcon  width="30px" height="30px"/>
                    <div>Chauffeur</div>
                </div>
                <div className="flex w-1/2 flex-col items-center p-5" onClick={() => {navigate('/entretien-garage')}}>
                    <Badge content="2"><ExclamationTriangleIcon  width="30px" height="30px"/></Badge>
                    <div>Entretien</div>
                </div>
                <div className="flex w-1/2 flex-col items-center p-5" onClick={() => {navigate('/documents-garage')}}>
                    <DocumentTextIcon  width="30px" height="30px"/>
                    <div>Documents</div>
                </div>
                <div className="flex w-1/2 flex-col items-center p-5" onClick={() => {navigate('/trajets-garage')}}>
                    <MapIcon  width="30px" height="30px"/>
                    <div>Trajets</div>
                </div>
                <div className="flex w-1/2 flex-col items-center p-5" onClick={() => {navigate('/bilan-carbone-garage')}}>
                    <CloudIcon  width="30px" height="30px"/>
                    <div>Bilan Carbone</div>
                </div>
                <div className="flex w-1/2 flex-col items-center p-5">
                    <ChartPieIcon  width="30px" height="30px"/>
                    <div>Statistiques</div>
                </div>
            </div>
          </CardBody>
        </Card>
      </>

    );
};

export default GarageDetails;
