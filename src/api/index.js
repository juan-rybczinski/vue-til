import axios from 'axios';
import { setInterceptor } from '@/api/common/interceptors';

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptor(instance);
};

const instance = createInstance();

const registerUser = user => {
  return instance.post('signup', user);
};

const loginUser = user => {
  return instance.post('login', user);
};

const fetchPosts = () => {
  return instance.get('posts');
};

export { registerUser, loginUser, fetchPosts };
