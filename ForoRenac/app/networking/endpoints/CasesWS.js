import {axios} from '../Api';

// * Web Service for cases
export default casesWS = {
  getAll: async function () {
    //TODO replace for real endpoint later
    return await axios.get('/cases');
  },
  getCasesByField: async function ({field, value}) {
    return await axios.get(`/cases?${field}=${value}`);
  },
  addCase: async function ({caseData}) {
    return await axios.post('/cases', {
      caseData,
    });
  },
};
