import axiosInstance from "../api/axiosInstance"

export const addBrand = async (data) => {
    return await axiosInstance.post("/products/brands", data)
        .then((res) => {
            return Promise.resolve(res);
        })
        .catch(async (err) => {
            return Promise.reject(err?.response);
        });

}