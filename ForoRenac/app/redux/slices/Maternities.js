import {createSlice} from '@reduxjs/toolkit';

import {createAsyncThunk} from '@reduxjs/toolkit';
import maternitiesWS from '../../networking/endpoints/MaternitiesWS';
import {MOCKS_MATERNITIES} from '../../temp/MocksFakeData';

// * ---------------  THUNKS -----------------
export const getMaternities = createAsyncThunk(
  'maternities/getMaternities',
  async ({userId}) => {
    const response = await maternitiesWS.getMaternities({userId});
    console.log('getMaternities', response.data);
    return response.data.data;
  },
);
// * ---------------  SLICE -----------------
const maternitiesSlice = createSlice({
  name: 'maternities',
  initialState: {
    selected: null,
    maternities: [],
    loading: false,
  },
  reducers: {
    setSelected(state, action) {
      state.selected = action.payload;
    },
    setDefaultSelected(state, action) {
      if (action.payload.length) {
        state.selected = action.payload[0];
      }
    },
    setMaternities(state, action) {
      state.maternities = action.payload;
    },
    clearAll(state, action) {
      state.selected = null;
      state.maternities = [];
      state.loading = false;
    },
  },
  extraReducers: builder => {
    // * GET MATERNITIES
    builder.addCase(getMaternities.pending, state => {
      state.loading = true;
    });
    builder.addCase(getMaternities.fulfilled, (state, action) => {
      caseSlice.caseReducers.setMaternities(state, action);
      //TODO check if Screen for choose maternity exists and remove this
      caseSlice.caseReducers.setDefaultSelected(state, action);
      state.loading = false;
    });
    builder.addCase(getMaternities.rejected, state => {
      caseSlice.caseReducers.setMaternities(
        state,
        MOCKS_MATERNITIES.setMaternities(),
      );
      //TODO check if Screen for choose maternity exists and remove this
      caseSlice.caseReducers.setDefaultSelected(
        state,
        MOCKS_MATERNITIES.setMaternities(),
      );
      state.loading = false;
    });
  },
});

export default maternitiesSlice.reducer;
