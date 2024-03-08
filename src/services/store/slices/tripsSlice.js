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
