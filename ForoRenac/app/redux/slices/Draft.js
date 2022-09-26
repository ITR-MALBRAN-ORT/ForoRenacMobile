import {createSlice} from '@reduxjs/toolkit';

import {createAsyncThunk} from '@reduxjs/toolkit';
import casesWS from '../../networking/endpoints/CasesWS';

// * ---------------  THUNKS -----------------
export const addCase = createAsyncThunk('draft/addCase', async ({data}) => {
  const response = await casesWS.addCase({data});
  console.log('addCase', response.data);
  return response.data.data;
});
// * ---------------  SLICE -----------------
const draftSlice = createSlice({
  name: 'draft',
  initialState: {
    draft: null,
    loading: false,
  },
  reducers: {
    setDraft(state, action) {
      state.draft = action.payload;
    },
    clearDraft(state, action) {
      state.draft = null;
    },
  },
  extraReducers: builder => {
    // * ADD CASE
    builder.addCase(addCase.pending, state => {
      state.loading = true;
    });
    builder.addCase(addCase.fulfilled, (state, action) => {
      caseSlice.caseReducers.clearDraft(state, action);
      state.loading = false;
    });
    builder.addCase(addCase.rejected, state => {
      state.loading = false;
    });
  },
});

export default draftSlice.reducer;
