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
const trucksApiActions = generateApiActions("trucks");

const trucksSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addReducerApiCases(builder, trucksApiActions);
  },
});

export const {
  trucksGetAll,
  trucksGetById,
  trucksCreate,
  trucksUpdate,
  trucksRemove,
  trucksSearch,
} = generateExportedActions("trucks", trucksApiActions);

export default trucksSlice.reducer;

