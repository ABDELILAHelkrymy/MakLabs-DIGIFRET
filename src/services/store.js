import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import  userReducer  from "./app/user/userSlice";

export const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
    }),
    });