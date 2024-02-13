import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, IdentificationIcon, ArrowUpTrayIcon, ArchiveBoxIcon, ArrowDownTrayIcon, ChevronDoubleRightIcon, PlayIcon, PlayPauseIcon, PlayCircleIcon, PauseCircleIcon, CalendarDaysIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
    Chip,
    Card,
    CardHeader,
    CardBody,
    Typography,
    Badge
  } from "@material-tailwind/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
const Entretien = () => {
    const navigate = useNavigate();

    return (
        <>
        {/* Page Header */}
        <div className="flex justify-between p-5 bg-white">
            <ChevronLeftIcon width="20px" height="20px" onClick={() => {navigate("/garage-detail");}} />
            <div className="">Liste des entretiens</div>
            <PlusIcon width="25px" height="25px" fill="#2eaa35"/>
        </div>
        {/* Page Content  */}
        <Card className="overflow-hidden rounded-none border-b-[2px]">
            <CardBody className="text-center">
                <div className="flex items-center pb-6">
                    <CalendarDaysIcon width="25px" height="25px" /> 
                    <span>Entretien et maintenance</span>   
                </div> 
                <div className="flex p-6 border-b-[2px]">
                    <div className="w-1/3 text-left">21/02</div>    
                    <div className="w-1/3 text-left">Réparation</div>    
                    <div className="w-1/3 flex justify-end"><ChevronDoubleRightIcon width="25px" height="25px" onClick={()=>{navigate('/entretien-garage-detail')}}/></div>    
                </div>      
                <div className="flex p-6 border-b-[2px]">
                    <div className="w-1/3 text-left">01/10</div>    
                    <div className="w-1/3 text-left">Visite Technique</div>    
                    <div className="w-1/3 flex justify-end"><ChevronDoubleRightIcon width="25px" height="25px" /></div>    
                </div>      
                <div className="flex p-6 border-b-[2px]">
                    <div className="w-1/3 text-left">15/03</div>    
                    <div className="w-1/3 text-left">Assurance</div>    
                    <div className="w-1/3 flex justify-end"><ChevronDoubleRightIcon width="25px" height="25px" /></div>    
                </div>      
            </CardBody>
        </Card>
        
      </>
        
    );
};

export default Entretien;
