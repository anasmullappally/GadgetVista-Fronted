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

export const addProduct = async (data) => {
    return await axiosInstance.post("/products", data)
        .then((res) => {
            return Promise.resolve(res);
        })
        .catch(async (err) => {
            return Promise.reject(err?.response);
        });
}

export const addVariants = async (data) => {
    console.log(data);
    return await axiosInstance.post("/products/variants", data)
        .then((res) => {
            return Promise.resolve(res);
        })
        .catch(async (err) => {
            console.log(err);
            return Promise.reject(err?.response);
        });
}