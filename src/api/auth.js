import { instance } from '@/api/index';

const registerUser = user => {
  return instance.post('signup', user);
};

const loginUser = user => {
  return instance.post('login', user);
};

export { registerUser, loginUser };
