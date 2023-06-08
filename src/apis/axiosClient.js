import axios from 'axios';
import store from '../store/index.js'

export const BASIC_HTTP = axios.create({
  baseURL: 'http://44.211.220.175/',
  timeout: 10000,
});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJEaXZpbmUiLCJsYXN0TmFtZSI6Ik9udW9yYSIsImVtYWlsIjoiZGl2eXdlYWx0aDFAZ21haWwuY29tIiwicGhvbmVObyI6IjA5MDE4MzE3ODE3IiwicGFzc3dvcmQiOiIkMmIkMTAkTExETEJvUEpOM2EzcE5SMWVvTmt2LldPeGNMVkcwSTE3enh0cTJNNFYxZkgzVU4uTWFnd3UiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA5VDE0OjMwOjQ0LjUyM1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA5VDE0OjMwOjQ0LjUyM1oiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2ODYwNDM1NDgsImV4cCI6MTY4NjEyOTk0OH0.eLK72lc9kfsiJBarxS-7QLDbMPEpDPq1uHT6c7Rw2mE'

export let BEARER_HTTP = axios.create({
  baseURL: 'http://44.211.220.175/',
  timeout: 10000,
  headers: {'Authorization': `Bearer`}
});
export const SET_BEARER_HTTP = () => {
   BEARER_HTTP = axios.create({
    baseURL: 'http://44.211.220.175/',
    timeout: 10000,
    headers: {'Authorization': `Bearer ${store.state.token}`}
  });
  return BEARER
}