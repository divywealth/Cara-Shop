import {BASIC_HTTP} from './axiosClient'
import store from '../store/index.js'

export const registerApi = async (data) => {
    try {
        const response = await BASIC_HTTP.post('v1/user', data);
        return response.data;
    } catch (error) {
        throw error.response.data.message
    }
}


export const loginApi = async (data) => {
    try {
        let response = await BASIC_HTTP.post('v1/signin', data);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
    
}

export const forgetPasswordApi = async (data) => {
    try {
        let response = await BASIC_HTTP.post('/v1/forgetpassword', data)
    } catch (error) {
        throw error.response.data.message
    }
}

export const verifyCodeApi = async (data) => {
    try {
        let response = await BASIC_HTTP.post('/v1/verifypasscode', data)
    } catch (error) {
        throw error.response.data.message
    }
}

export const resetPasswordApi = async (data) => {
    try {
        let response = await BASIC_HTTP.post('/v1/reset-password', data)
    } catch (error) {
        throw error.response.data.message
    }
}