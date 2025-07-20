import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';
import postReducer from './slices/postsSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    postsList: postReducer,
    usersList: usersReducer,
  },
});

export default store;
