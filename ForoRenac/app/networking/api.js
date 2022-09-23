import axios from 'axios';
import config from '../config/config';
axios.defaults.baseURL = config.BASE_URL;
axios.defaults.timeout = config.TIME_OUT;
axios.defaults.headers.common = {
  Accept: 'application/json', // server response format
  'Content-Type': 'application/json', // type of format in which the information was sent
};

//TODO export it and call it (Where?)
function setClientToken(token) {
  axios.defaults.headers.common = {Authorization: 'bearer ' + {token}};
}

module.exports = {
  axios,
  setClientToken,
};
