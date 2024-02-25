import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  PlusIcon,
  ChartBarIcon,
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  Stepper,
  Step,
  Input,
  Button,
} from "@material-tailwind/react";
import CalendarElement from "../../components/CalendarElement";

const NewTripRdThree = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
      {/* Page Titre */}
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate("/garage-detail");
          }}
        />
        <div className="">Nouveau trajet</div>
        <PlusIcon
          width="25px"
          height="25px"
          fill="#2eaa35"
          onClick={() => {
            navigate("/nouvelle-tache-entretien");
          }}
        />
      </div>
      {/* Page Content  */}
      <div className="explore">
        <Card>
          <CardBody>
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
            >
              <Step onClick={() => setActiveStep(0)}>1</Step>
              <Step onClick={() => setActiveStep(1)}>2</Step>
              <Step onClick={() => setActiveStep(2)}>3</Step>
            </Stepper>
            <div className="pt-5 pb-5 text-center font-bold">Détails</div>
            <div className="mb-3">
              <div className="flex">
                <ChartBarIcon height="25px" width="25px" className="mr-3" />
                <span className="font-bold">Distance</span>
              </div>
              <p>8501 KMS</p>
            </div>
            <div className="mb-3">
              <div className="flex">
                <ArrowDownTrayIcon
                  height="25px"
                  width="25px"
                  className="mr-3"
                />
                <span className="font-bold">Chargement</span>
              </div>
              <p>Test Trip location : GCW - AV 5 Casablana</p>
            </div>
            <div className="mb-3">
              <div className="flex">
                <ArrowUpTrayIcon height="25px" width="25px" className="mr-3" />
                <span className="font-bold">Déchargement</span>
              </div>
              <p>N° 25 Rue du Bac - 3000 Fès - Maroc</p>
            </div>
            <div className="">
              <div className="list-element">
                <div className="pt-5 pb-5">
                  <Input name="nom" label="Prix total" />
                </div>
                <div className="pt-5 pb-5">
                  <Input name="tel" label="poid total en T (Ton)" />
                </div>
                <div className="pt-5 pb-5">
                  <Input name="email" label="Nombre des palettes" />
                </div>
                <div className="pt-5 pb-5">
                  <Input name="adresse" label="Camion" />
                </div>
                <div className="pt-5 pb-5">
                  <CalendarElement />
                </div>
              </div>
            </div>
            <Button fullWidth className="bg-purple-400 mt-5">
              Continuer
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default NewTripRdThree;
