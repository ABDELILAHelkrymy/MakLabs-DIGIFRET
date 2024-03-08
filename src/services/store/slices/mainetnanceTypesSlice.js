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

const mainetnanceTypesApiActions = generateApiActions("maintenanceTypes");

const mainetnanceTypesSlice = createSlice({
  name: "mainetnanceTypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addReducerApiCases(builder, mainetnanceTypesApiActions);
  },
});

export const {
  mainetnanceTypesGetAll,
  mainetnanceTypesGetById,
  mainetnanceTypesCreate,
  mainetnanceTypesUpdate,
  mainetnanceTypesRemove,
  mainetnanceTypesSearch,
} = generateExportedActions("mainetnanceTypes", mainetnanceTypesApiActions);

export default mainetnanceTypesSlice.reducer;
