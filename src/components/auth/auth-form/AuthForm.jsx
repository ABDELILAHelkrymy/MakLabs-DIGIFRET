import React, { useEffect, useState } from "react";
import AuthFormUI from "./AuthFormUI";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithEmail } from "../../../services/app/auth/authSlice";

export default function AuthForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const isEmailAuthEnabled =
    process.env.REACT_APP_EMAIL_AUTH_ENABLED === "true";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    if (e.preventDefault) e.preventDefault();
    console.log({ email, password });
    if (email && password) {
      dispatch(loginWithEmail({ email, password }));
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <>
      {isEmailAuthEnabled && (
        <AuthFormUI
          {...{ login, email, setEmail, password, setPassword, error }}
        />
      )}
    </>
  );
}
