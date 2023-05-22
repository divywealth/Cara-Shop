import {getProducts} from '../../apis/productApis'

export const productActions = {
     async handleGetProduct({commit}) {
      try {
        const response = await getProducts();
        commit('SET_PRODUCT', response)
      }catch(error) {
        throw error
      }
    }

}