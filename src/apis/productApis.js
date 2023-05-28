import { BASIC_HTTP } from "./axiosClient";

export const getProducts = async () => {
    try {
        const response = await BASIC_HTTP.get('v1/product')
        return response.data;
    } catch (error) {
        throw error.response.data.message
    }
}