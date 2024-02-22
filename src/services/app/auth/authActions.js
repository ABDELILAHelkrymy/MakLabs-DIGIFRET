import { createAsyncThunk } from "@reduxjs/toolkit";
import { authProviderAuthorize, authProviderCallback, updateUserProfile } from "./authApi";
import getApiCaller from "../../api/getApiCaller";

const authApi = getApiCaller("auth");

export const getProviderUrl = createAsyncThunk(
    "user/getUrl",
    async (provider) => {
        const response = await authProviderAuthorize(provider);
        return response;
    }
    );

export const getProviderCallback = createAsyncThunk(
    "user/getCallback",
    async (data) => {
        const {code, provider} = data;
        const response = await authProviderCallback(code, provider);
        return response;
    }
    );


export const editUserProfile = createAsyncThunk(
    "user/editProfile",
    async (data) => {
        const response = await updateUserProfile(data);
        return response;
    }
    );

export const loginWithEmail = createAsyncThunk("user/emailLogin", async (data) => {
  return await authApi({ action: "login", method: "POST", data });
});
