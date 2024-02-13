import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, IdentificationIcon, ArrowUpTrayIcon, ArchiveBoxIcon, ArrowDownTrayIcon, ChevronDoubleRightIcon, PlayIcon, PlayPauseIcon, PlayCircleIcon, PauseCircleIcon, CalendarDaysIcon, PlusIcon, PencilIcon, PencilSquareIcon, DocumentTextIcon, MapIcon } from "@heroicons/react/24/solid";
import {
    Chip,
    Card,
    CardHeader,
    CardBody,
    Typography,
    Badge
  } from "@material-tailwind/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
const EntretienDetail = () => {
    const navigate = useNavigate();

    return (
        <>
        {/* Page Header */}
        <div className="flex justify-between p-5 bg-white">
            <ChevronLeftIcon width="20px" height="20px" onClick={() => {navigate("/entretien-garage");}} />
            <div className="">Détail d'entretien</div>
            <PencilSquareIcon width="25px" height="25px" fill="#2eaa35"/>
        </div>
        {/* Page Content  */}
        <Card className="overflow-hidden rounded-none border-b-[2px]">
            <CardBody className="text-center">
                <div className="flex items-center pb-6">
                    <CalendarDaysIcon width="25px" height="25px" /> 
                    <span>Entretien et maintenance</span>   
                </div> 
                <div className="flex pb-6">
                    <div className="text-left mr-2">21/02</div>    
                    <div className="text-left">Réparation</div>     
                </div>      
                <div className="flex flex-col items-start">
                    <div className="flex flex-col mb-5 border-t-[2px]">
                        <div className="font-bold flex items-center pb-2 pt-2">
                            <MapIcon width="25px" height="25px"className="mr-2"/>
                            <span>Adresse</span>
                        </div>
                        <p className="text-left">73 bd d' Anfa ang. 1 rue Close de Provence 2°ét. bur. 202 Gauthier Arr. Maarif- Casablanca - Maroc</p>
                    </div>
                    <div  className="flex flex-col mb-5 border-t-[2px]">
                        <div className="font-bold flex items-center  pb-2 pt-2">
                            <ArrowUpTrayIcon width="25px" height="25px" className="mr-2"/>
                            <span>Documents</span>
                        </div>
                        <p className="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>   
            </CardBody>
        </Card>
        
      </>
        
    );
};

export default EntretienDetail;
