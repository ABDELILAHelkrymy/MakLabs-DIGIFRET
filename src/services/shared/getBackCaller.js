import axios from "axios";

const api_url = process.env.REACT_APP_BACKEND_URL;

const getBackCaller = (module, ressource = "", version = "v1") => {
  return async (opts = {}) => {
    const authData = localStorage.getItem("authData");
    let token = authData ? JSON.parse(authData).token : "";
    let reqUrl = `${api_url}/${module}/${version}`;
    reqUrl += ressource ? `/${ressource}` : "";
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
      console.log(
        `${module} -> ${opts.method} -> ${reqUrl} -> response.data`,
        response.data
      );
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      if (err?.response?.data?.code === "AUTH_MIDLLEWARE_TOKEN_EXPIRED") {
        localStorage.removeItem("token");
        localStorage.removeItem("authData");
        document.location.href = "/sign-up/step1";
      }
      console.log(err);
      throw err;
    }
  };
};

export const getAuthCaller = () => {
  return getBackCaller("auth");
};

export const getApiCaller = (resource) => {
  return getBackCaller("api", resource);
};

