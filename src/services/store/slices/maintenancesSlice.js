import { createSlice } from "@reduxjs/toolkit";
import { addReducerApiCases, getDefaultInitialState } from "../../shared/reducerManager";
import { generateApiActions, generateExportedActions } from "../../shared/actionsManager";

const apiInitialState = getDefaultInitialState();

const initialState = {
  ...apiInitialState,
};

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
