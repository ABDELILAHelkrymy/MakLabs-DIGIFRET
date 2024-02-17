import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getProviderCallback } from "../services/app/auth/authActions";

const ProviderCallback = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const code = new URLSearchParams(window.location.search).get("code");
    useEffect(() => {
        dispatch(getProviderCallback({code: code, provider : 'google'}));
        navigate("sign-up/step2");
    }, [code]);

    return null;
};

export default ProviderCallback;
