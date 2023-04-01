import axios, {AxiosInstance} from 'axios';
import {BASE_URL, REQUEST_TIMEOUT} from '../setings';


export const createAPI = (): AxiosInstance =>
  axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });
