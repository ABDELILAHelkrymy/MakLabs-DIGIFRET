import { Stepper as MUIStepper, Step } from "@material-tailwind/react";

const Stepper = ({ activeStep }) => {
  return (
    <div className="w-full py-4 px-8">
      <MUIStepper activeStep={activeStep}>
        <Step>1</Step>
        <Step>2</Step>
        <Step>3</Step>
      </MUIStepper>
    </div>
  );
};

export default Stepper;
