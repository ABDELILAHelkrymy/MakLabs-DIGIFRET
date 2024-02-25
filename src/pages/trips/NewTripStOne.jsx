import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, PlusIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Card, CardBody, Stepper, Step, Select, Option, Input, Button } from "@material-tailwind/react";

const NewTripStOne = () => {

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
            <ChevronLeftIcon width="20px" height="20px" onClick={() => {navigate("/garage-detail");}} />
            <div className="">Nouveau trajet</div>
            <PlusIcon width="25px" height="25px" fill="#2eaa35" onClick={() => {navigate('/nouvelle-tache-entretien')}}/>
        </div>
        {/* Page Content  */}
        <div className="explore">
            <Card className="z-0">
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
                    <div className="pt-5 pb-5 text-center font-bold">Chargement initial</div>
                    <div className="bloc-adresse-existante" >
                        <div className="flex items-center justify-between pt-5 pb-5" >
                            <span className="font-bold">Adresse existante :</span>
                            <ChevronDownIcon height="20px" width="20px" />
                        </div>
                        <div className="list-element p-5 ">
                            <Select variant="standard" label="Séléctionner une adresse">
                                <Option>Dépot client B - Adresse</Option>
                                <Option>Dépot client B - Adresse</Option>
                                <Option>Bureau clinet C - Adresse</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="bloc-adresse-nouvelle">
                        <div className="flex items-center justify-between pt-5 pb-5">
                            <span className="font-bold">Nouvelle Adresse :</span>
                            <ChevronDownIcon height="20px" width="20px" />
                        </div>
                        <div className="list-element p-5">
                            <div className="pt-5 pb-5"><Input name="nom" label="Nom complet"/></div>
                            <div className="pt-5 pb-5"><Input name="tel" label="Téléphone" /></div>
                            <div className="pt-5 pb-5"><Input name="email" label="Adresse e-mail" /></div>
                            <div className="pt-5 pb-5"><Input name="adresse" label="Adresse portable" /></div>
                        </div>
                    </div>
                    <Button fullWidth className="bg-purple-400 mt-5">
                        Continuer
                    </Button>
                </CardBody>
           </Card>
        </div>
        </>
    )
}
export default NewTripStOne;
