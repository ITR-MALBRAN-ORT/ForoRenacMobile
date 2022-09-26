import {axios} from '../Api';

// * Web Service for cases
export default maternitiesWS = {
  getMaternities: async function ({userId}) {
    return await axios.get(`/maternities?userId=${userId}`);
  },
};
