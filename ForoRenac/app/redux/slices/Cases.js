import {createSlice} from '@reduxjs/toolkit';

import {createAsyncThunk} from '@reduxjs/toolkit';
import casesWS from '../../networking/endpoints/CasesWS';

// TODO remove for production - MOCKUPS FAKE DATA
import { MOCKS_CASES } from '../../temp/MocksFakeData';

// * ---------------  THUNKS -----------------
export const getCases = createAsyncThunk('cases/getCases', async () => {
  const response = await casesWS.getAll();
  console.log('getCases', response.data);
  const {data} = response.data;
  return data;
});
export const getCasesByField = createAsyncThunk(
  'cases/getCasesByField',
  async ({field, value}) => {
    const response = await casesWS.getCasesByField({field, value});
    console.log('getCasesByField', response.data);
    const {data} = response.data;
    return data;
  },
);
export const addCase = createAsyncThunk('cases/addCase', async ({caseData}) => {
  const response = await casesWS.addCase({caseData});
  console.log('addCase', response.data);
  //Server response with new case
  const {data} = response.data;
  return data;
});

// * ---------------  SLICE -----------------
const casesSlice = createSlice({
  name: 'cases',
  initialState: {
    cases: [],
    filteredCases: [],
    loading: false,
  },
  reducers: {
    setCases(state, action) {
      state.cases = action.payload;
    },
    setFilteredCases(state, action) {
      state.filteredCases = action.payload;
    },
    addCase(state, action) {
      state.cases.push(action.payload);
    },
  },
  extraReducers: builder => {
    // * GET ALL CASES
    builder.addCase(getCases.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCases.fulfilled, (state, action) => {
      casesSlice.caseReducers.setCases(state, action);
      state.loading = false;
    });
    builder.addCase(getCases.rejected, state => {
      state.loading = false;
      //TODO remove for production
      casesSlice.caseReducers.setCases(state, MOCKS_CASES.setCases());
    });
    // * GET CASES BY FIELD
    builder.addCase(getCasesByField.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCasesByField.fulfilled, (state, action) => {
      casesSlice.caseReducers.setFilteredCases(state, action);
      state.loading = false;
    });
    builder.addCase(getCasesByField.rejected, state => {
      state.loading = false;
      //TODO remove for production
      casesSlice.caseReducers.setFilteredCases(
        state,
        MOCKS_CASES.setFilteredCases(),
      );
    });
    // * ADD CASE
    builder.addCase(addCase.pending, state => {
      state.loading = true;
    });
    builder.addCase(addCase.fulfilled, (state, action) => {
      casesSlice.caseReducers.addCase(state, action);
      state.loading = false;
    });
    builder.addCase(addCase.rejected, state => {
      state.loading = false;
      //TODO remove for production
      casesSlice.caseReducers.addCase(state, MOCKS_CASES.addCase());
    });
  },
});

export default casesSlice.reducer;


