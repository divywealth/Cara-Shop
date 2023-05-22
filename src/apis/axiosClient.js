import axios from 'axios';
import store from '../store/index.js'

export const BASIC_HTTP = axios.create({
  baseURL: 'http://44.211.220.175/',
  timeout: 10000,
});

export const BEARER_HTTP = axios.create({
  baseURL: 'http://44.211.220.175/',
  timeout: 10000,
  headers: {'Authorization': 'Bearer <token>' }
});