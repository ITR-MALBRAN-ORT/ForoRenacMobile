import {axios} from '../Api';

// * Web Service for cases
export default periodWS = {
  getPeriod: async function ({userId, year, month}) {
    return await axios.get(
      `/periods?userId=${userId}&year=${year}&month=${month}`,
    );
  },
  addPeriod: async function ({userId, year, month, data}) {
    return await axios.post(
      `/periods?userId=${userId}&year=${year}&month=${month}`,
      {data},
    );
  },
  updatePeriod: async function ({userId, year, month, data}) {
    return await axios.put(
      `/periods?userId=${userId}&year=${year}&month=${month}`,
      {data},
    );
  },
};
