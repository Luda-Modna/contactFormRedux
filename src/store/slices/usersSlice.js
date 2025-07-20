import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

export const getUsersThunk = createAsyncThunk(
  'users/getUsers',
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
  name: 'users',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsersThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
      state.users = payload;
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
