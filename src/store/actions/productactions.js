import {
  getProducts,
  addProduct,
  getCart,
  removeUserProduct,
  addToCart,
  getOrderProducts,
} from "@/apis/productApis";

export const productActions = {
  async handleGetProduct({ commit }) {
    try {
      const response = await getProducts();
      commit("SET_PRODUCT", response);
    } catch (error) {
      throw error;
    }
  },

  async handleAddToCart({ commit }, payload) {
    try {
      const response = await addProduct(payload);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getCart({ commit }) {
    try {
      const response = await getCart();
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async removeUserProduct({ commit }, payload) {
    try {
      const response = await removeUserProduct(payload);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async placeOrder({ commit }, payload) {
    try {
      const response = await addToCart(payload);
      console.log(response)
      commit("SET_ORDER_PRODUCT", response);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
