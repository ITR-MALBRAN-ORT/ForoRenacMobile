import {axios} from '../Api';

// * Web Service for cases
export default caseWS = {
  getCase: async function ({id}) {
    return await axios.get(`/cases/${id}`);
  },
  updateCase: async function ({id, data}) {
    return await axios.put(`/cases/${id}`, {
      data
    });
  },
  deleteCase: async function ({id}) {
    return await axios.delete(`/cases/${id}`);
  },
};
