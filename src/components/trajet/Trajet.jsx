import { react } from "react";
import { useNavigate } from "react-router-dom";
import { TruckIcon, CalendarDaysIcon, UserIcon, ArchiveBoxIcon, ArrowsUpDownIcon, ChevronDoubleRightIcon, PlayIcon, PlayPauseIcon } from "@heroicons/react/24/solid";


const Trajet = (props) => {
    const navigate = useNavigate();
    return (
    <div>
        <div className="flex flex-col bg-white p-5 mb-2">
            <div className="bg-purple-100 w-1/2 rounded text-xs mb-2 p-1">12 500 DHS - 348 Kms</div>
            <div className="trajet flex justify-between ">
                <div className="trajet-content w-3/4">
                    <div className="traget-direction mb-5">
                        <div className="">Tanger-MED</div>
                        <ArrowsUpDownIcon  width="20px" height="20px" />
                        <div>Casablanca</div>
                    </div>
                    <div className="flex justify-between text-xs items-center">
                        <div className="traget-material flex items-center w-1/2">
                            <TruckIcon width="20px" height="20px" className="mr-2" /> 
                            <span>IVECO - 2015</span>
                        </div>
                        <div className="trajet-info flex items-center w-1/2">
                            <ArchiveBoxIcon  width="20px" height="20px"className="mr-2" /> 
                            <span>3.5 tonnes</span>
                        </div>
                    </div>
                </div>
                <div className="actions flex flex-col justify-between">
                    <div className="etat-trajet">
                        {props.etat ? 
                        (<PlayIcon width="25px" height="25px" fill="#2eaa35"/>)
                        : 
                        (<PlayPauseIcon width="25px" height="25px" fill="#f8a72f" />)
                        }
                    </div>
                    <div className="detail-trajet"><ChevronDoubleRightIcon width="20px" height="20px" onClick={() => {navigate('/trajet-detail')}}/></div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Trajet;