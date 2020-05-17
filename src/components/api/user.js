import axios from 'axios';

export default {
  user: {
    login: (credentials) => axios.post('/api/login', { credentials }).then((res) => res.data),
    signup: (user) => axios.post('/api/signup', { user }).then((res) => res.data)
  }
};
