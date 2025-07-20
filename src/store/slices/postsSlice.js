import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as API from '../../api';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPostThunk = createAsyncThunk(
  'posts/getPosts',
  async (payload, thunkAPI) => {
    try {
      const { data } = await API.getPosts();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ messege: err.messege });
    }
  }
);

const postSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPostThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getPostThunk.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.isFetching = false;
    });
    builder.addCase(getPostThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = postSlice;

export default reducer;
