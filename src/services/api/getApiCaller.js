import axios from "axios";

const api_url = process.env.REACT_APP_BACKEND_URL;

const getApiCaller = (ressource, version = "v1") => {
  return async (opts = {}) => {
    const token = localStorage.getItem("token") ?? "";
    let reqUrl = `${api_url}/${ressource}/${version}`;
    if (opts.action) reqUrl += `/${opts.action}`;
    if (opts.id) reqUrl += `/${opts.id}`;
    if (opts.query) reqUrl += `?${new URLSearchParams(opts.query).toString()}`;

    try {
      const response = await axios(reqUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
          ...opts.headers,
        },
        withCredentials: false,
        ...opts,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export default getApiCaller;
