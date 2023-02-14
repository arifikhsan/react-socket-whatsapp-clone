import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  value: [],
};

export const activeConversationSlice = createSlice({
  name: 'activeConversation',
  initialState,
  reducers: {
    addContactToConversation: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteContactFromConversation: (state, action) => {
      state.value = state.value.filter(
        (contact) => contact.id != action.payload
      );
    },
    deleteAllActiveConversactionContacts: (state) => {
      state.value = [];
    },
  },
});

export const getActiveConversationContacts = (state) => {
  console.log(state);
  return [];
};

export const {
  addContactToConversation,
  deleteContactFromConversation,
  deleteAllActiveConversactionContacts,
} = activeConversationSlice.actions;

export default activeConversationSlice.reducer;
