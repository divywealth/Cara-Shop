import axios from 'axios';
import store from '../store/index.js'

export const BASIC_HTTP = axios.create({
  baseURL: 'http://44.211.220.175/',
  timeout: 10000,
});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJEaXZpbmUiLCJsYXN0TmFtZSI6Ik9udW9yYSIsImVtYWlsIjoiZGl2eXdlYWx0aDFAZ21haWwuY29tIiwicGhvbmVObyI6IjA5MDE4MzE3ODE3IiwicGFzc3dvcmQiOiIkMmIkMTAkTExETEJvUEpOM2EzcE5SMWVvTmt2LldPeGNMVkcwSTE3enh0cTJNNFYxZkgzVU4uTWFnd3UiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA5VDE0OjMwOjQ0LjUyM1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA5VDE0OjMwOjQ0LjUyM1oiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2ODU3MDUxOTMsImV4cCI6MTY4NTc5MTU5M30.FFsgb5Y63m7ZiOvaDPTi0sjuNZc5LIW28xhHlH5yzKY'
//const accessToken = store.state.token

export const BEARER_HTTP = axios.create({
  baseURL: 'http://44.211.220.175/',
  timeout: 10000,
  headers: {'Authorization': `Bearer ${token}` }
});