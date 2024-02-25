import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const tripsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

//export { getProviderUrl, getProviderCallback, editUserProfile };
export const {} = tripsSlice.actions;
export default tripsSlice.reducer;
