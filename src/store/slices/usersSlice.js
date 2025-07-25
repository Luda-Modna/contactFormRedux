import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

const USERS_SLICE_NAME = 'users';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

export const getUsersThunk = createAsyncThunk(
  `${USERS_SLICE_NAME}/getUsers`,
  async (payload, thunkAPI) => {
    try {
      const { data } = await API.getUsers();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ messege: err.messege });
    }
  }
);

const usersSlice = createSlice({
  initialState,
  name: USERS_SLICE_NAME,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsersThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.normalizedUsers = {};
      payload.forEach(u => (state.normalizedUsers[u.id] = u));
      state.isFetching = false;
    });
    builder.addCase(getUsersThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, action } = usersSlice;

export default reducer;
