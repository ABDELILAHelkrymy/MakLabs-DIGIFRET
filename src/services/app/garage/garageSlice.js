import { createSlice } from "@reduxjs/toolkit";
import { fetchAllGarageTrucks } from "./garageActions";

const initialState = {
  loading: false,
  garageTrucks: [],
  error: null,
};

const garageSlice = createSlice({
  name: "garage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGarageTrucks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllGarageTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.garageTrucks = action.payload;
      })
      .addCase(fetchAllGarageTrucks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = garageSlice.actions;
export default garageSlice.reducer;
