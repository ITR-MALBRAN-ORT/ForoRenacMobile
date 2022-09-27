import {createSlice} from '@reduxjs/toolkit';

import {createAsyncThunk} from '@reduxjs/toolkit';
import casesWS from '../../networking/endpoints/CasesWS';

//TODO remove for production
import { MOCKS_CASE } from '../../temp/MocksFakeData';

// * ---------------  THUNKS -----------------
export const getCase = createAsyncThunk('case/getCase', async ({id}) => {
  const response = await casesWS.getCase({id});
  const {data} = response.data;
  return data;
});
export const updateCase = createAsyncThunk(
  'case/updateCase',
  async ({id, data}) => {
    const response = await casesWS.updateCase({id, data});
    console.log('updateCase', response.data);
    return response.data.data;
  },
);
export const deleteCase = createAsyncThunk('case/deleteCase', async ({id}) => {
  const response = await casesWS.deleteCase({id});
  console.log('deleteCase', response.data);
  const {data} = response.data;
  return data;
});

// * ---------------  SLICE -----------------
const caseSlice = createSlice({
  name: 'case',
  initialState: {
    case: null,
    loading: false,
  },
  reducers: {
    setCase(state, action) {
      state.case = action.payload;
    },
    clearCase(state, action) {
      state.case = null;
    },
  },
  extraReducers: builder => {
    // * GET CASE
    builder.addCase(getCase.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCase.fulfilled, (state, action) => {
      caseSlice.caseReducers.setCase(state, action);
      state.loading = false;
    });
    builder.addCase(getCase.rejected, state => {
      console.log('rejected: ', state.case)
      state.loading = false;
      //TODO remove after for production
      caseSlice.caseReducers.setCase(state, MOCKS_CASE.setCase());
    });
    // * UPDATE CASE
    builder.addCase(updateCase.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateCase.fulfilled, (state, action) => {
      caseSlice.caseReducers.setCase(state, action);
      state.loading = false;
    });
    builder.addCase(updateCase.rejected, state => {
      state.loading = false;
      //TODO remove after for production
      caseSlice.caseReducers.setCase(state, MOCKS_CASE.setCase());
    });
    // * DELETE CASE
    builder.addCase(deleteCase.pending, state => {
      state.loading = true;
    });
    builder.addCase(deleteCase.fulfilled, (state, action) => {
      caseSlice.caseReducers.clearCase(state, action);
      state.loading = false;
    });
    builder.addCase(deleteCase.rejected, state => {
      state.loading = false;
      //TODO remove after for production
      caseSlice.caseReducers.clearCase(state, action);
    });
  },
});

export default caseSlice.reducer;