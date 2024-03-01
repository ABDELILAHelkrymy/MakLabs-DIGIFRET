import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "../app/auth/authSlice";

import trucksReducer from "./slices/trucksSlice";
import locationsReducer from "./slices/locationsSlice";
import usersReducer from "./slices/usersSlice";
import companiesReducer from "./slices/companiesSlice";
import maintenancesReducer from "./slices/maintenancesSlice";
import maintenanceTypesReducer from "./slices/mainetnanceTypesSlice";
import tripsReducer from "./slices/tripsSlice";
import attachmentsReducer from "./slices/attachmentsSlice";

export const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    trucks: trucksReducer,
    locations: locationsReducer,
    users: usersReducer,
    companies: companiesReducer,
    maintenances: maintenancesReducer,
    maintenanceTypes: maintenanceTypesReducer,
    trips: tripsReducer,
    attachments: attachmentsReducer,
  }),
});
