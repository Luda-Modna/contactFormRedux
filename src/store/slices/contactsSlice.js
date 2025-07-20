import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      isFavorite: false,
      fullName: 'Test',
      phone: '+380987654321',
    },
    {
      id: uuidv4(),
      isFavorite: false,
      fullName: 'Max',
      phone: '+380987654322',
    },
  ],
};

const contactsSlice = createSlice({
  initialState,
  name: 'contacts',
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push({ ...payload, isFavorite: false, id: uuidv4() });
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(c => c.id !== payload);
    },
    updateContact: (state, { payload: { id, data } }) => {
      const updateContactIndex = state.contacts.findIndex(c => c.id === id);
      state.contacts[updateContactIndex] = {
        ...state.contacts[updateContactIndex],
        ...data,
      };
    },
  },
});

const { reducer, actions } = contactsSlice;

export const { createContact, deleteContact, updateContact } = actions;

export default reducer;
