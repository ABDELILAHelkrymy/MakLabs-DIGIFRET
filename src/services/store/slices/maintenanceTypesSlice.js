import { createSlice } from "@reduxjs/toolkit";
import {
  addReducerApiCases,
  getDefaultInitialState,
} from "../../shared/reducerManager";
import {
  generateApiActions,
  generateExportedActions,
} from "../../shared/actionsManager";

const apiInitialState = getDefaultInitialState();

const initialState = {
  ...apiInitialState,
};

const maintenanceTypesApiActions = generateApiActions("maintenance-types");

const maintenanceTypesSlice = createSlice({
  name: "maintenance-types",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addReducerApiCases(builder, maintenanceTypesApiActions);
  },
});

export const {
  maintenanceTypesGetAll,
  maintenanceTypesGetById,
  maintenanceTypesCreate,
  maintenanceTypesUpdate,
  maintenanceTypesRemove,
  maintenanceTypesSearch,
} = generateExportedActions("maintenanceTypes", maintenanceTypesApiActions);

export default maintenanceTypesSlice.reducer;

