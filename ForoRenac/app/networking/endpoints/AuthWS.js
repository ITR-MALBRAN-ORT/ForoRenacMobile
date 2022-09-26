import {axios} from '../Api';

// * Web Service for authentication
export default authWS = {
  login: async function ({email, password, deviceToken}) {
    return await axios.post('/login', {
      email,
      password,
      //token: deviceToken, //puedo especificar la key
    });
  },
  register: async function ({email, password}) {
    return await axios.post('/register', {
      email,
      password,
    });
  },
  getUserById: async function ({id}) {
    return await axios.get(`/users/${id}`);
  },
  recoverAccount: async function ({email}) {
    return await axios.get('/recover', {
      email,
    });
  },
  sendRecoverCode: async function ({code}) {
    return await axios.post('/recover', {
      code,
    });
  },
  changePassword: async function ({password}) {
    return await axios.post('/auth/password', {
      password,
    });
  },
};
