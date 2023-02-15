import { createSlice } from '@reduxjs/toolkit';
import { isEqual } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

let initialState = {
  conversations: [],
};

export const conversationSlice = createSlice({
  name: 'conversationSlice',
  initialState,
  reducers: {
    addConversation: (state, action) => {
      state.conversations.forEach((conversation) => {
        if (
          isEqual(
            conversation.contacts.map((c) => c.id),
            action.payload
          )
        ) {
          return;
        }
      });

      state.conversations = [
        ...state.conversations,
        {
          id: uuidv4(),
          contacts: action.payload,
        },
      ];
    },
    deleteConversations: (state) => {
      state.conversations = [];
    },
  },
});

export const getConversations = (state) => {
  return state.conversationSlice.conversations;
};

// export const getConversationById = (state) => (action) => {
//   console.log(state)
// return state.conversationSlice.conversations.find(
//   (conversation) => conversation.id == action.payload
// );
//   return state.conversationSlice[0]
// };

export const { addConversation, deleteConversations } =
  conversationSlice.actions;

export default conversationSlice.reducer;
