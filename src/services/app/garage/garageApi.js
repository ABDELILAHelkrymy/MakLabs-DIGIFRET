import apiCall from "../../api/apiCall";

export const getAllGarageTrucks = async () => {
  const response = await apiCall("/api/v1/trucks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
