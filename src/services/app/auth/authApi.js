import apiCall from "../../api/apiCall";

export const authProviderAuthorize = async (provider) => {
  const redirect_uri =
    process.env.REACT_APP_REDIRECT_URI + `/auth/${provider}/callback`;
  try {
    const response = await apiCall(`/auth/v1/${provider}/authorize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        redirect_uri,
      },
    });
    if (response.status === 200) {
      const { data } = response;
      window.location.href = data.url;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const authProviderCallback = async (code, provider) => {
  const redirect_uri =
    process.env.REACT_APP_REDIRECT_URI + `/auth/${provider}/callback`;
  try {
    const response = await apiCall(`/auth/v1/${provider}/callback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        code,
        redirect_uri: redirect_uri,
      },
    });
    if (response) {
      const { data } = response;
      localStorage.setItem("authData", JSON.stringify(data));
      return data;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateUserProfile = async (data) => {
  try {
    const response = await apiCall("/auth/v1/register-trans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
    if (response) {
      const { data } = response;
      localStorage.setItem("authData", JSON.stringify(data));
      return data;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
