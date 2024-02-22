import { createSlice } from "@reduxjs/toolkit";
import { getProviderUrl, getProviderCallback, editUserProfile, loginWithEmail } from "./authActions";

const getAUthData = () => {
    const authData = localStorage.getItem("authData");
    if (authData) {
      return JSON.parse(authData);
    }
    return null;
  }

const initialState = {
    authData : getAUthData(),
    EditedAuthData: {
      provider : "",
      providerId: "",
      email: "",
      fullname: "",
      phone: "",
      role: "",
    },
    isLoading: false,
    error: null,
    };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        editAuthData: (state, action) => {
            state.EditedAuthData = {
                ...state.EditedAuthData,
                ...action.payload,
            };
        }
        },
    extraReducers:(builder) => {
        builder.addCase(getProviderUrl.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProviderUrl.fulfilled, (state, action) => {
            state.url = action.payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getProviderUrl.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
        builder.addCase(getProviderCallback.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProviderCallback.fulfilled, (state, action) => {
            state.authData = action.payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getProviderCallback.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        // loginWithEmail reducer cases
        builder.addCase(loginWithEmail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginWithEmail.fulfilled, (state, action) => {
            state.authData = action.payload;
            if (action.payload.token)
                localStorage.setItem("token", action.payload.token);
            if (action.payload.user)
                localStorage.setItem("authData", JSON.stringify(action.payload));
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(loginWithEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        builder.addCase(editUserProfile.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(editUserProfile.fulfilled, (state, action) => {
            state.authData = action.payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(editUserProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
    });

export { getProviderUrl, getProviderCallback, editUserProfile, loginWithEmail };
export const { editAuthData } = authSlice.actions;
export default authSlice.reducer;
