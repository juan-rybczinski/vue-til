import axios from 'axios';
import { setInterceptor } from '@/api/common/interceptors';

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return instance;
};

const createInstanceWithAuth = url => {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptor(instance);
};

export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');
