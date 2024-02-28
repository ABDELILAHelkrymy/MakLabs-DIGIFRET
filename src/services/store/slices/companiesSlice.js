import { createSlice } from "@reduxjs/toolkit";
import { addReducerApiCases } from "../../shared/reducerManager";
import { generateApiActions, generateExportedActions } from "../../shared/actionsManager";

const initialState = {};

const companiesApiActions = generateApiActions("companies");

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addReducerApiCases(builder, companiesApiActions);
  },
});

export const {
  companiesGetAll,
  companiesGetById,
  companiesCreate,
  companiesUpdate,
  companiesRemove,
  companiesSearch,
} = generateExportedActions("companies", companiesApiActions);

export default companiesSlice.reducer;
