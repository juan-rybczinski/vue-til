import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

const registerUser = user => {
  return instance.post('signup', user);
};

const loginUser = user => {
  return instance.post('login', user);
};

export { registerUser, loginUser };
