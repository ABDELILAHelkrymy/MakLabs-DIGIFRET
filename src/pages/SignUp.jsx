import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";
import facebookIcon from "../assets/svg/facebookIcon.svg";

import ArrowRightIcon from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import OAuth from "../components/OAuth";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Stepper,
  Step,
} from "@material-tailwind/react";
import { SidebarWithBurgerMenu } from "../components/sideBar/Sidbar";
export const ArrowRightIconComponent = () => (
  <img src={ArrowRightIcon} alt="" />
);

const SignUP = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = fromData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="pageContainer">

        <main>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            color="transparent"
            shadow={false}
          >
            <div className="w-full py-4 px-8">
              <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
              >
                <Step onClick={() => setActiveStep(0)}>1</Step>
                <Step onClick={() => setActiveStep(1)}>2</Step>
                <Step onClick={() => setActiveStep(2)}>3</Step>
              </Stepper>
              {/* <div className="mt-16 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                    Next
                </Button>
            </div> */}
            </div>
            {activeStep === 0 ? (
              <>
                <Typography variant="h4" color="blue-gray" className="my-8">
                  Ouvrir un nouveau compte
                </Typography>
                <div className="flex flex-col items-center gap-8">
                  <Button
                    size="lg"
                    variant="filled"
                    color="blue-gray"
                    className="flex items-center gap-3"
                  >
                    <img
                      src={googleIcon}
                      alt="metamask"
                      className="h-6 w-6"
                    />
                    j'ai un compte Google
                  </Button>
                  <Button
                    size="lg"
                    variant="gradient"
                    color="light-blue"
                    className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
                  >
                    j'ai un compte Facebook
                    <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                      <img
                        src={facebookIcon}
                        alt="metamask"
                        className="h-8 w-8"
                      />
                    </span>
                  </Button>
                </div>
              </>
            ) : activeStep === 1 ? (
              <>
                <Typography variant="h4" color="blue-gray">
                  Veullez confirmer votre profile
                </Typography>

                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-1 flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Nom complete
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Nom complete"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Téléphone
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="XXXXXXXXXX"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Adresse e-mail
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="name@mail.com"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <Button className="mt-6" fullWidth>
                    Continue
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Typography variant="h4" color="blue-gray">
                  Quel est votre role?
                </Typography>
              </>
            )}
          </Card>
        </main>
      </div>
    </>
  );
};

export default SignUP;
