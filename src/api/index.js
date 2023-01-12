import axios from 'axios';

const registerUser = user => {
  const url = 'http://localhost:3000';
  return axios.post(`${url}/signup`, user);
};

export { registerUser };
