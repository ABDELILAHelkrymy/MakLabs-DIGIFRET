import axios from "axios";

const api_url = "https://jsonplaceholder.typicode.com/";

const api = async (url, opts= {})=> {
    let token = localStorage.getItem("token");
    try {
        const response = await axios(`${api_url}${url}`, {
            headers: {
                Authorization: "Bearer " + token,
                ...opts.headers,
            },
            withCredentials : true,
            ...opts
        });
        return response;
    } catch (err) {
        console.log(err);
    }
};

export default api;
