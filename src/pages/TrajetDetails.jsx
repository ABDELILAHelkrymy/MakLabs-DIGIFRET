import {
  ArchiveBoxIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import { PlayPauseIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
import "../components/trajet/trajet.css";
import {
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

import { React } from "react";

const TrajetDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between p-5 bg-white">
        <div className="">
          <ChevronLeftIcon
            width="20px"
            height="20px"
            onClick={() => {
              navigate("/trajets");
            }}
          />
        </div>
        <div className="">Détail du trajet</div>
        <div className="">
          <PlayPauseIcon width="25px" height="25px" fill="#f8a72f" />
        </div>
      </div>
      <Card className="overflow-hidden rounded-t-none">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <div className="carteMap w-full overflow-hidden mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1679119.007290524!2d-7.869855156455536!3d34.71705009221249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0xd0c9b86ce183b5b%3A0xb3593ae869541a11!2sTanger%20Med%2C%20N16!3m2!1d35.879556199999996!2d-5.5136612!4m5!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!3m2!1d33.5731104!2d-7.5898433999999995!5e0!3m2!1sfr!2sma!4v1707590134438!5m2!1sfr!2sma"
              width="480"
              height="200"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </CardHeader>
        <CardBody>
          <div className="trajet-detail flex justify-between items-end">
            <div>
              <div className="flex items-center">
                <IdentificationIcon
                  width="20px"
                  height="20px"
                  className="mr-2"
                />
                <span className="font-bold">Rentabilité :</span>
              </div>
              <div>18 Kms à vide, 50 DHS/Km</div>
            </div>
            <ChevronDoubleRightIcon width="20px" height="20px" className="mb-2"/>
          </div>
          <div className="trajet-detail flex justify-between items-end">
            <div>
              <div className="flex items-center">
                <ArrowDownTrayIcon
                  width="20px"
                  height="20px"
                  className="mr-2"
                />
                <span className="font-bold">Chargement :</span>
              </div>
              <div>12 AV Zerktouni - Casablanca</div>
            </div>
            <ChevronDoubleRightIcon width="20px" height="20px" className="mb-2"/>
          </div>
          <div className="trajet-detail flex justify-between items-end">
            <div>
              <div className="flex items-center">
                <ArrowUpTrayIcon width="20px" height="20px" className="mr-2" />
                <span className="font-bold">Déchargement :</span>
              </div>
              <div>302 BVD Moammed V - Agadir </div>
            </div>
            <ChevronDoubleRightIcon width="20px" height="20px" className="mb-2"/>
          </div>
          <div className="trajet-detail flex justify-between items-end">
            <div>
              <div className="flex items-center">
                <ArchiveBoxIcon width="20px" height="20px" className="mr-2" />
                <span className="font-bold">Cargaison :</span>
              </div>
              <div>3.5 T, 40 Palettes</div>
            </div>
            <ChevronDoubleRightIcon width="20px" height="20px" className="mb-2"/>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default TrajetDetails;
