import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

let initialState = {
  chats: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action) => {
      state.chats = [
        ...state.chats,
        { ...action.payload, id: uuidv4(), createdAt: new Date() },
      ];
    },
  },
});

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
