import {
  registerApi,
  loginApi,
  verifyCodeApi,
  resetPasswordApi,
  forgetPasswordApi,
} from "@/apis/authApis";

export const userActions = {
  async handleRegisterUser({ commit }, data) {
    try {
      const response = await registerApi(data);
      commit("SET_USER", response.user);
      commit("SET_TOKEN", response.access_token);
      return response;
    } catch (e) {
      throw error;
    }
  },
  async handleLoginUser({ commit, state }, data) {
    try {
      const response = await loginApi(data);
      commit("SET_USER", response.user);
      commit("SET_TOKEN", response.access_token);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async handleForgetPassword({ commit, state }) {
    try {
      const response = await forgetPasswordApi(state.email);
      return response;
    } catch (e) {}
  },
  async handleverifyCode({ commit, state }) {
    try {
      const newdata = {
        email: state.email,
        verificationCode: state.verificationCode,
      };
      const response = await verifyCodeApi(newdata);
      return response;
    } catch (e) {}
  },
  async handleResetPassword({ commit, state }, data) {
    try {
      const newdata = {
        email: state.data,
        verificationCode: state.verificationCode,
        password: data,
      };
      const response = await resetPasswordApi(newdata);
      return response;
    } catch (e) {}
  },
};
