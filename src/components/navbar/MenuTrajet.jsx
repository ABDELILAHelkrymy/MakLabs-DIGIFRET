import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import "./menu-trajet.css";
const MenuTrajet = () => {
  return (
    <>
      <div className="flex justify-between text-gray-700 rounded-xl shadow-md text-xs pt-2">
        <div className="trajet-element rounded-l-lg">En cours (3)</div>
        <div className="trajet-element is-active">Planifié (9+)</div>
        <div className="trajet-element rounded-r-lg">Anciens</div>
      </div>
    </>
  );
};

export default MenuTrajet;
