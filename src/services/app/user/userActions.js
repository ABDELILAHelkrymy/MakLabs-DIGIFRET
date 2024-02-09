import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "./userApi";

export const fetchUsers = createAsyncThunk(
    "user/fetchUsers",
    async () => {
        const response = await getUsers();
        console.log(response);
        return response;
    }
    );

