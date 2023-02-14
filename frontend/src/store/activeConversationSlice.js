import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  conversation: null,
};

export const activeConversationSlice = createSlice({
  name: 'activeConversationSlice',
  initialState,
  reducers: {
    setConversation: (state, action) => {
      state.conversation = action.payload;
    },
    deleteConversation: (state) => {
      state.conversation = null;
    },
  },
});

export const getActiveConversation = (state) => {
  return state.activeConversationSlice.conversation;
};

export const { setConversation, deleteConversation } = activeConversationSlice.actions;

export default activeConversationSlice.reducer;
