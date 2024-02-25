import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApiCaller } from "../../api/getBackCaller";

const trucksApi = getApiCaller("trucks");

export const fetchAllGarageTrucks = createAsyncThunk(
  "user/getTrucks",
  async () => {
    return await trucksApi({ method: "GET" });
  }
);
