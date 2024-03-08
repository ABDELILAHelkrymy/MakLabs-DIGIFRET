import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  PlusIcon,
  BanknotesIcon,
  MegaphoneIcon,
  BuildingOfficeIcon,
  ArrowsPointingInIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody } from "@material-tailwind/react";

const NotificationTrajet = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Page Content  */}
      <div className="explore">
        <Card className="overflow-hidden">
          <CardBody>
            <div className="flex items-center mb-5">
              <div>
                <BanknotesIcon width="20px" height="20px" className="mr-2" />
              </div>
              <div>
                <p>(16:11) + 79,254 MAD Reçus</p>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div>
                <MegaphoneIcon width="20px" height="20px" className="mr-2" />
              </div>
              <div>
                <p>(13:01) Nouvelle annonces</p>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div>
                <BanknotesIcon width="20px" height="20px" className="mr-2" />
              </div>
              <div>
                <p>(09:00) + 99,888 MAD Reçus</p>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div>
                <BuildingOfficeIcon
                  width="20px"
                  height="20px"
                  className="mr-2"
                />
              </div>
              <div>
                <p>(09:00) Entrepôt RBA12 fermé</p>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div>
                <ArrowsPointingInIcon
                  width="20px"
                  height="20px"
                  className="mr-2"
                />
              </div>
              <div>
                <p>(09:00) A2 Marrakech fermée </p>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <BanknotesIcon width="20px" height="20px" className="mr-2" />
              </div>
              <div>
                <p>(08:45) + 12,234 MAD Reçus</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default NotificationTrajet;

