import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  value: [],
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteContact: (state, action) => {
      state.value = state.value.filter(
        (contact) => contact.id != action.payload
      );
    },
  },
});

export const getContacts = (state) => state.contact.value;

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
