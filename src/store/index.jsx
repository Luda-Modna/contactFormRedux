import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';
import postReducer from './slices/postsSlice';

const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    postsList: postReducer,
  },
});

export default store;
