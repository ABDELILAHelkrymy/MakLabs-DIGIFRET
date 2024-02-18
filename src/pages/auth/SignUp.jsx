import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editAuthData } from "../../services/app/auth/authSlice";
import {
  Card,
  Stepper,
  Step,
  Spinner,
} from "@material-tailwind/react";
import ProfileInfoConfirme from "../../components/profileInfoConfirme/ProfileInfoConfirme";
import Role from "../../components/role/Role";
import AuthProvider from "../../components/authProvider/AuthProvider";

const SignUP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { EditedAuthData, authData } = useSelector((state) => state.auth);
  const { step } = useParams();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if(authData){
      if (authData.user.isCompleted) {
        navigate("/garage");
      } else {
        dispatch(editAuthData({
          ...EditedAuthData,
          provider: authData.user.provider,
          providerId: authData.user.providerId,
        }));
        navigate("/sign-up/step2?step=step2");
        setActiveStep(1);
      }
    }else {
      navigate("/sign-up/step1?step=step1");
      setActiveStep(0);
    }
  }, [authData]);

  useEffect(() => {
    if (step === "step1") {
      setActiveStep(0);
    } else if (step === "step2") {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  }, [step]);


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
              >
                <Step>1</Step>
                <Step>2</Step>
                <Step>3</Step>
              </Stepper>
            </div>
            {activeStep === 0 ? (
              <AuthProvider />
            ) : activeStep === 1 ? (
              <ProfileInfoConfirme />
            ) : (
              <Role />
            )}
          </Card>
        </main>
      </div>
    </>
  );
};

export default SignUP;