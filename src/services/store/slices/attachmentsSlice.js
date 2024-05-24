import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addReducerApiCases,
  getDefaultInitialState,
} from "../../shared/reducerManager";
import {
  generateApiActions,
  generateExportedActions,
} from "../../shared/actionsManager";

import { getRessouceFetcher } from "../../shared/getRessouceFetcher";

const attachmentsFetcher = getRessouceFetcher("attachments");

export const getTruckImage = createAsyncThunk(
  "attachments/getTruckImage",
  async ({ id }) => {
    const query = [
      {
        field: "entity",
        value: id,
      },
      {
        field: "type",
        value: "truck-logo",
      },
    ];
    const attachmentRes = await attachmentsFetcher.search(query);
    console.log("attachment", attachmentRes.data.attachments);
  }
);

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
      state.update.data = null;
      state.remove.data = null;
      state.search.data = null;
    },
  },
  extraReducers: (builder) => {
    addReducerApiCases(builder, attachmentsApiActions);
    builder.addCase(getTruckImage.fulfilled, (state, action) => {
      state.getTruckImage.isLoading = false;
      const truckId = action.payload.data.attachments[0].entity;
      if (truckId) {
        if (state.truckImages) {
          state.truckImages[truckId] = action.payload.data.attachments[0];
        } else {
          state.truckImages = { [truckId]: action.payload.data.attachments[0] };
        }
      }
    });
    builder.addCase(getTruckImage.pending, (state) => {
        state.getTruckImage.isLoading = true;
        state.getTruckImage.error = null;
    });
    builder.addCase(getTruckImage.rejected, (state, action) => {
      state.getTruckImage.isLoading = false;
      state.getTruckImage.error = action.error.message;
    });
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
