import axios from "axios";

const api_url = process.env.REACT_APP_BACKEND_URL;

const apiCall = async (url, opts = {}) => {
  const authData = localStorage.getItem("authData");
  let token = authData ? JSON.parse(authData).token : "";
  console.log(token);
  try {
    const response = await axios(`${api_url}${url}`, {
      headers: {
        Authorization: "Bearer " + token,
        ...opts.headers,
      },
      withCredentials: false,
      ...opts,
    });
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default apiCall;
