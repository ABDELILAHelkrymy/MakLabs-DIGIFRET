import { createSlice } from "@reduxjs/toolkit";
import { addReducerApiCases } from "../../shared/reducerManager";
import { generateApiActions, generateExportedActions } from "../../shared/actionsManager";

const initialState = {};

const mainetnanceTypesApiActions = generateApiActions("mainetnanceTypes");

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
