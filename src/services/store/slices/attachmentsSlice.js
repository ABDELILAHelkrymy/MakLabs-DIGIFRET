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
    return attachmentRes?.data?.attachments[0];
  }
);

const apiInitialState = getDefaultInitialState();

const initialState = {
  ...apiInitialState,
  truckImages: {},
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
      state.truckImages.isLoading = false;
      const truckId = action.payload.entity._id;
      if (truckId) {
        if (state.truckImages) {
          state.truckImages[truckId] = action.payload;
        } else {
          state.truckImages = { [truckId]: action.payload };
        }
      }
    });
    builder.addCase(getTruckImage.pending, (state) => {
      state.truckImages.isLoading = true;
      state.truckImages.error = null;
    });
    builder.addCase(getTruckImage.rejected, (state, action) => {
      state.truckImages.isLoading = false;
      state.truckImages.error = action.error.message;
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

