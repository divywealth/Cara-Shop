import {registerApi, loginApi} from '@/apis/authApis'


export const userActions = {
    async handleRegisterUser({commit}, data) {
      try {
          const response = await registerApi(data);
          commit('SET_USER', response.user)
          commit('SET_TOKEN', response.access_token)
          return response;
      }catch(e) {
        throw error
        
      }
    },
    async handleLoginUser({commit, state}, data) {
      try {
        const response = await loginApi(data);
        commit('SET_USER', response.user);
        commit('SET_TOKEN', response.access_token);
        return response;
      }catch(error) {
        throw error
      }
    },

}