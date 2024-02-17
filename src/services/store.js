import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import  authReducer  from "./app/auth/authSlice";

export const store = configureStore({
    reducer: combineReducers({
        auth: authReducer,
    }),
    });
