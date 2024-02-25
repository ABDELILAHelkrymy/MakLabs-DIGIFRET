import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./app/auth/authSlice";
import garageReducer from "./app/garage/garageSlice";
import tripsReducer from "./app/trips/tripsSlice";

export const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    garage: garageReducer,
    trips: tripsReducer,
  }),
});
