import {axios} from '../api';

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
  getCase: async function ({id}) {
    return await axios.get(`/cases/${id}`);
  },
  updateCase: async function ({id, data}) {
    return await axios.put(`/cases/${id}`, {
      data,
    });
  },
  deleteCase: async function ({id}) {
    return await axios.delete(`/cases/${id}`);
  },
};
