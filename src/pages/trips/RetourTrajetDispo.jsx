import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
  PlusIcon,
  IdentificationIcon,
  ArrowUpTrayIcon,
  ChevronDoubleDownIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Map from "../../components/Map";

const RetourTrajetDispo = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const origineRef = params.get("origin");
  const destinationRef = params.get("destination");

  return (
    <>
      {/* Page Titre */}
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate("/trajets");
          }}
        />
        <div className="">Retour disponible</div>
        <PlusIcon width="25px" height="25px" fill="none" />
      </div>
      {/* Page Content  */}
      <div className="explore">
        <Card className="overflow-hidden rounded-t-none">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <Map origin={origineRef} destination={destinationRef} />
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
              <ChevronDoubleRightIcon
                width="20px"
                height="20px"
                className="mb-2"
                onClick={() => {
                  navigate("/retour-trajet");
                }}
              />
            </div>
            <div className="trajet-detail flex justify-between items-end">
              <div>
                <div className="flex items-center">
                  <ArrowUpTrayIcon
                    width="20px"
                    height="20px"
                    className="mr-2"
                  />
                  <span className="font-bold">Chargement :</span>
                </div>
                <div>12 AV Zerktouni - Casablanca</div>
              </div>
              <ChevronDoubleRightIcon
                width="20px"
                height="20px"
                className="mb-2"
              />
            </div>
            <div className="trajet-detail flex justify-between items-end">
              <div>
                <div className="flex items-center">
                  <ArrowUpTrayIcon
                    width="20px"
                    height="20px"
                    className="mr-2"
                  />
                  <span className="font-bold">Déchargement :</span>
                </div>
                <div>302 BVD Moammed V - Agadir </div>
              </div>
              <ChevronDoubleRightIcon
                width="20px"
                height="20px"
                className="mb-2"
              />
            </div>
            <div className="trajet-detail flex justify-between items-end">
              <div>
                <div className="flex items-center">
                  <ArchiveBoxIcon width="20px" height="20px" className="mr-2" />
                  <span className="font-bold">Cargaison :</span>
                </div>
                <div>3.5 T, 40 Palettes</div>
              </div>
              <ChevronDoubleRightIcon
                width="20px"
                height="20px"
                className="mb-2"
              />
            </div>
            <Button fullWidth className="bg-purple-400 mt-3">
              Accepter changement
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default RetourTrajetDispo;
