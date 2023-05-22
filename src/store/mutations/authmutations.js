

export const authMutations = {
    SET_USER(state, payload){
        Vue.set(state, 'user', payload);
    },
    SET_TOKEN(state, payload){
        Vue.set(state, 'token', payload);
    },
}