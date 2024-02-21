import { createSlice } from "@reduxjs/toolkit";
import { getProviderUrl, getProviderCallback, editUserProfile } from "./garageActions";

const initialState = {

    };

const garageSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        },
    extraReducers:(builder) => {

    }
    });

//export { getProviderUrl, getProviderCallback, editUserProfile };
export const {  } = garageSlice.actions;
export default garageSlice.reducer;
