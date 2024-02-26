import { createSlice } from "@reduxjs/toolkit";
import { addReducerApiCases } from "../../shared/reducerManager";
import { generateApiActions, generateExportedActions } from "../../shared/actionsManager";

const initialState = {};

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
