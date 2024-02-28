import { getApiCaller } from "./getBackCaller";

export const getRessouceFetcher = (resource) => {
    const apiCaller = getApiCaller(resource);

    const getById = async (id, opts = {}) => {
        return await apiCaller({ id, method :"GET", ...opts });
    };
    const getAll = async (opts = {}) => {
        return await apiCaller({ method: "GET", ...opts });
    };
    const create = async (data, opts = {}) => {
        return await apiCaller({ method: "POST", data, ...opts });
    };
    const update = async (id, data, opts = {}) => {
        return await apiCaller({ id, method: "PUT", data, ...opts });
    };
    const remove = async (id, opts = {}) => {
        return await apiCaller({ id, method: "DELETE", ...opts });
    };
    const search = async (query, opts = {}) => {
        return await apiCaller({ data: {query}, method: "POST", ...opts });
    };
    const call = async (opts) => {
        return await apiCaller(opts);
    };

    return {
        getById,
        getAll,
        create,
        update,
        remove,
        search,
        call,
    };
};

export default getRessouceFetcher;
