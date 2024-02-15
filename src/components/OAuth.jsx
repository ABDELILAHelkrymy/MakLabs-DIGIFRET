import React from "react";
import googleIcon from "../assets/svg/googleIcon.svg";
import facebookIcon from "../assets/svg/facebookIcon.svg";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { getProviderUrl } from "../services/app/user/userActions";

const OAuth = ({provider}) => {
  const dispatch = useDispatch();

  const handleProviderClick = () => {
    dispatch(getProviderUrl(provider));
  };

  return (
    <Button
      size="lg"
      variant={provider === 'google' ? "filled" : "gradient"} // Choose variant based on provider
      color={provider === 'google' ? "blue-gray" : "light-blue"} // Choose color based on provider
      className="flex items-center gap-3"
      onClick={handleProviderClick}
    >
      <img src={provider === 'google' ? googleIcon : facebookIcon} alt={provider === 'google' ? 'Google' : 'Facebook'} className="h-6 w-6" />
      J'ai un compte {provider === 'google' ? 'Google' : 'Facebook'}
    </Button>
  );
};

export default OAuth;
