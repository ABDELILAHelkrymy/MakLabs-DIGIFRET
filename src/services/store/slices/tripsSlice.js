import { createSlice } from "@reduxjs/toolkit";
import { addReducerApiCases } from "../../shared/reducerManager";
import {
  generateApiActions,
  generateExportedActions,
} from "../../shared/actionsManager";

const initialState = {};

const tripsApiActions = generateApiActions("trips");

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addReducerApiCases(builder, tripsApiActions);
  },
});

export const {
  tripsGetAll,
  tripsGetById,
  tripsCreate,
  tripsUpdate,
  tripsRemove,
  tripsSearch,
} = generateExportedActions("trips", tripsApiActions);

export default tripsSlice.reducer;
