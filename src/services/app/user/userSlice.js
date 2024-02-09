import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./userActions";

const initialState = {
    user: {},
    isLoading: false,
    error: null,
    };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            },
        },
    extraReducers:(builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
                console.log("fetchUsers.pending");
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                console.log(action.error.message);
                state.error = action.error.message;
                state.isLoading = false;
                });
        }
    });

export const { setUser } = userSlice.actions;
export { fetchUsers };
export default userSlice.reducer;