import {createSlice} from '@reduxjs/toolkit';

import {createAsyncThunk} from '@reduxjs/toolkit';
import authWS from '../../networking/endpoints/AuthWS';

import {setClientToken} from '../../networking/Api';

//TODO remove for production
import { MOCKS_AUTH } from '../../temp/MocksFakeData';


// * ---------------  THUNKS -----------------
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({email, password}, {dispatch}) => {
    const response = await authWS.login({email, password});
    console.log('loginUser', response.data);
    const {id, token} = response.data;
    // Consider don't handle it here, instead call it in component
    await dispatch(getUserById({id: id}));
    return token;
  },
);
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({email, password}, {dispatch}) => {
    const response = await authWS.register({email, password});
    console.log('registerUser', response.data);
    const {id, token} = response.data;
    // Consider don't handle it here, instead call it in component
    await dispatch(getUserById({id: id}));
    return token;
  },
);
export const getUserById = createAsyncThunk(
  'auth/getUserById',
  async ({id}) => {
    const response = await authWS.getUserById({id});
    console.log('getUserById', response.data);
    return response.data.data;
  },
);
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  return null;
});

export const recoverAccount = createAsyncThunk(
  'auth/recoverAccount',
  async ({email}) => {
    const response = await authWS.recoverAccount({email});
    console.log('recoverAccount', response.data);
    //TODO check later what response payload receive
    const {emailSended} = response.data;
    return emailSended;
  },
);
export const sendRecoverCode = createAsyncThunk(
  'auth/sendRecoverCode',
  async ({code}) => {
    const response = await authWS.sendRecoverCode({code});
    console.log('sendRecoverCode', response.data);
    //TODO check later what response payload receive
    const {id, token} = response.data;
    // Consider don't handle it here, instead call it in component
    await dispatch(getUserById({id: id}));
    return token;
  },
);
export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({password}) => {
    const response = await authWS.changePassword({password});
    console.log('changePassword', response.data);
    //TODO check later what response payload receive
    const {success} = response.data;
    return success;
  },
);

// * ---------------  SLICE -----------------
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    loading: false,
    id: null,
    email: null,
    first_name: null,
    last_name: null,
    avatar: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      const {id, email, first_name, last_name, avatar} = action.payload;
      state.id = id;
      state.email = email;
      state.first_name = first_name;
      state.last_name = last_name;
      state.avatar = avatar;
    },
    clear(state, action) {
      (state.isAuthenticated = false), (state.token = null);
      state.id = null;
      state.email = null;
      state.first_name = null;
      state.last_name = null;
      state.avatar = null;
      state.loading = false;
    },
  },
  extraReducers: builder => {
    // * REGISTER USER
    builder.addCase(registerUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      authSlice.caseReducers.setToken(state, action);
      state.isAuthenticated = true;
      state.loading = false;
      setClientToken(action.payload);
    });
    builder.addCase(registerUser.rejected, state => {
      state.loading = false;
      // TODO remove Fake data later
      state.isAuthenticated = true;
      authSlice.caseReducers.setToken(state, MOCKS_AUTH.setToken());
    });

    // * LOGIN USER
    builder.addCase(loginUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      authSlice.caseReducers.setToken(state, action);
      state.isAuthenticated = true;
      state.loading = false;
      setClientToken(action.payload);
    });
    builder.addCase(loginUser.rejected, state => {
      state.loading = false;
      // TODO remove Fake data later
      state.isAuthenticated = true;
      authSlice.caseReducers.setToken(state, MOCKS_AUTH.setToken());
    });

    // * LOGOUT USER
    builder.addCase(logoutUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      authSlice.caseReducers.clear(state, action);
      setClientToken('');
    });
    builder.addCase(logoutUser.rejected, state => {
      state.loading = false;
    });

    // * GET CURRENT USER BY ID
    builder.addCase(getUserById.pending, state => {
      state.loading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      authSlice.caseReducers.setUser(state, action);
      state.loading = false;
    });
    builder.addCase(getUserById.rejected, state => {
      state.loading = false;
      // TODO remove Fake data later
      authSlice.caseReducers.setUser(state, MOCKS_AUTH.setUser());
    });

    // * SEND RECOVER CODE
    builder.addCase(sendRecoverCode.pending, state => {
      state.loading = true;
    });
    builder.addCase(sendRecoverCode.fulfilled, (state, action) => {
      authSlice.caseReducers.setToken(state, action);
      state.isAuthenticated = true;
      state.loading = false;
      setClientToken(action.payload);
    });
    builder.addCase(sendRecoverCode.rejected, state => {
      state.loading = false;
      // TODO remove Fake data later
      state.isAuthenticated = true;
      authSlice.caseReducers.setToken(state, MOCKS_AUTH.setToken());
    });

    // * CHANGE PASSWORD
    builder.addCase(changePassword.pending, state => {
      state.loading = true;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      //TODO handle it in a better way
      state.loading = false;
    });
    builder.addCase(changePassword.rejected, state => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;

