import api from "../../api/api";

export const getUsers = async () => {
  const response = await api(`/users`);
  return response.data;
};