import { BASIC_HTTP, BEARER_HTTP } from "./axiosClient";
import store from "../store/index.js";

export const getProducts = async () => {
  try {
    const response = await BASIC_HTTP.get("v1/products");
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const addProduct = async (data) => {
  try {
    console.log(data);
    const response = await BEARER_HTTP.post("v1/userproduct", data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getCart = async () => {
  try {
    const response = await BEARER_HTTP.get("v1/users/:userId/products");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const removeUserProduct = async (id) => {
  try {
    const response = await BASIC_HTTP.delete(`v1/userproduct/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addToCart = async (address) => {
  try {
    console.log(address);
    const response = await BEARER_HTTP.post("v1/order", address);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
