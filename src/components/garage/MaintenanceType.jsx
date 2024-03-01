import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { mainetnanceTypesGetById } from '../../services/store/slices/mainetnanceTypesSlice'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

function MaintenanceType({id}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const maintenanceType = useSelector((state) => state.mainetnanceTypes?.getById);

    useEffect(() => {
        dispatch(mainetnanceTypesGetById(id));
    }, [id]);

    useEffect(() => {
        console.log({maintenanceType});
    }, [maintenanceType]);

  return (
    <div className="flex p-3 border-b-[2px] items-center">
    <div className="w-1/3 text-left">21/04</div>
    <div className="w-1/3 text-left">assurance</div>
    <div className="w-1/3 flex justify-end">
      <ChevronDoubleRightIcon
        width="25px"
        height="25px"
        onClick={() => {
          navigate("/entretien-garage-detail");
        }}
      />
    </div>
  </div>
  )
}

export default MaintenanceType
