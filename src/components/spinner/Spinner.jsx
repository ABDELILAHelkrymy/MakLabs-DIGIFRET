import "./spinner.css";
import { Spinner as ReactSpinner } from "@material-tailwind/react";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ReactSpinner color="light-blue" size="xl" />
    </div>
  );
};

export default Spinner;
