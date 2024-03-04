import { createSlice } from "@reduxjs/toolkit";
import { addReducerApiCases } from "../../shared/reducerManager";
import {
  generateApiActions,
  generateExportedActions,
} from "../../shared/actionsManager";

const initialState = {};

const attachmentsApiActions = generateApiActions("attachments");

const attachmentsSlice = createSlice({
  name: "attachments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addReducerApiCases(builder, attachmentsApiActions);
  },
});

export const {
  attachmentsGetAll,
  attachmentsGetById,
  attachmentsCreate,
  attachmentsUpdate,
  attachmentsRemove,
  attachmentsSearch,
} = generateExportedActions("attachments", attachmentsApiActions);

export default attachmentsSlice.reducer;
