import {createSlice} from '@reduxjs/toolkit';

import {createAsyncThunk} from '@reduxjs/toolkit';
import periodWS from '../../networking/endpoints/PeriodWS';

//TODO remove for production - FAKE DATA
import { MOCKS_PERIOD } from '../../temp/MocksFakeData';

// * ---------------  THUNKS -----------------
export const getPeriod = createAsyncThunk(
  'period/getPeriod',
  async ({userId, year, month}) => {
    const response = await periodWS.getPeriod({userId, year, month});
    console.log('getPeriod', response.data);
    const {data} = response.data;
    return data;
  },
);
export const updatePeriod = createAsyncThunk(
  'period/updatePeriod',
  async ({userId, year, month, data}) => {
    const response = await periodWS.updatePeriod({userId, year, month, data});
    console.log('updatePeriod', response.data);
    return response.data.data;
  },
);
export const addPeriod = createAsyncThunk(
  'period/addPeriod',
  async ({userId, year, month, data}) => {
    const response = await periodWS.addPeriod({userId, year, month, data});
    console.log('addPeriod', response.data);
    return response.data.data;
  },
);

// * ---------------  SLICE -----------------
const periodSlice = createSlice({
  name: 'period',
  initialState: {
    period: null,
    loading: false,
  },
  reducers: {
    setPeriod(state, action) {
      state.period = action.payload;
    },
    clear(state, action) {
      state.period = null;
    },
  },
  extraReducers: builder => {
    // * GET PERIOD
    builder.addCase(getPeriod.pending, state => {
      state.loading = true;
    });
    builder.addCase(getPeriod.fulfilled, (state, action) => {
      periodSlice.caseReducers.setPeriod(state, action);
      state.loading = false;
    });
    builder.addCase(getPeriod.rejected, state => {
      state.loading = false;
      //TODO remove after for production
      periodSlice.caseReducers.setPeriod(state, MOCKS_PERIOD.setPeriod());
    });
    // * UPDATE PERIOD
    builder.addCase(updatePeriod.pending, state => {
      state.loading = true;
    });
    builder.addCase(updatePeriod.fulfilled, (state, action) => {
      periodSlice.caseReducers.setPeriod(state, action);
      state.loading = false;
    });
    builder.addCase(updatePeriod.rejected, state => {
      state.loading = false;
      //TODO remove after for production
      periodSlice.caseReducers.setPeriod(state, MOCKS_PERIOD.setPeriod());
    });
    // * ADD PERIOD
    builder.addCase(addPeriod.pending, state => {
      state.loading = true;
    });
    builder.addCase(addPeriod.fulfilled, (state, action) => {
      periodSlice.caseReducers.clear(state, action);
      state.loading = false;
    });
    builder.addCase(addPeriod.rejected, state => {
      state.loading = false;
      //TODO remove after for production
      periodSlice.caseReducers.clear(state, action);
    });
  },
});

export default periodSlice.reducer;

