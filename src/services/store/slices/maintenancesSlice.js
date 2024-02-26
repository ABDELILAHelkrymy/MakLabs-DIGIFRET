import { createSlice } from "@reduxjs/toolkit";
import { addReducerApiCases } from "../../shared/reducerManager";
import { generateApiActions, generateExportedActions } from "../../shared/actionsManager";

const initialState = {};

const maintenancesApiActions = generateApiActions("maintenances");

const maintenancesSlice = createSlice({
  name: "maintenances",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addReducerApiCases(builder, maintenancesApiActions);
  },
});

export const {
  maintenancesGetAll,
  maintenancesGetById,
  maintenancesCreate,
  maintenancesUpdate,
  maintenancesRemove,
  maintenancesSearch,
} = generateExportedActions("maintenances", maintenancesApiActions);

export default maintenancesSlice.reducer;
