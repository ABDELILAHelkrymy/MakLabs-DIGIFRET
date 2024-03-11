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

const attachmentsApiActions = generateApiActions("attachments");

const attachmentsSlice = createSlice({
  name: "attachments",
  initialState,
  reducers: {
    clearAttachment: (state) => {
      state.create.data = null;
    },
  },
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

export const { clearAttachment } = attachmentsSlice.actions;

export default attachmentsSlice.reducer;

