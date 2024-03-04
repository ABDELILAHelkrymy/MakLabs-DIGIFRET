import { createSlice } from "@reduxjs/toolkit";
import { addReducerApiCases } from "../../shared/reducerManager";
import {
  generateApiActions,
  generateExportedActions,
} from "../../shared/actionsManager";

const initialState = {};

const locationsApiActions = generateApiActions("locations");

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addReducerApiCases(builder, locationsApiActions);
  },
});

export const {
  locationsGetAll,
  locationsGetById,
  locationsCreate,
  locationsUpdate,
  locationsRemove,
  locationsSearch,
} = generateExportedActions("locations", locationsApiActions);

export default locationsSlice.reducer;
