import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { maintenanceTypesGetById } from "../../../services/store/slices/maintenanceTypesSlice";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

function MaintenanceType({ id, name }) {
  const navigate = useNavigate();

  return (
    <div className="flex p-3 border-b-[2px] items-center">
      <div className="w-1/3 text-left">21/04</div>
      <div className="w-1/3 text-left">{name}</div>
      <div className="w-1/3 flex justify-end">
        <ChevronDoubleRightIcon
          width="25px"
          height="25px"
          onClick={() => {
            navigate(`/entretien-garage-detail/${id}`);
          }}
        />
      </div>
    </div>
  );
}

export default MaintenanceType;

