import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  id: null,
};

export const identitySlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    updateId: (state, action) => {
      state.id = action.payload;
      console.log(state.id)
    },
    deleteId: (state) => {
      state.id = null;
    },
  },
});

export const getId = (state) => state.identity.id

export const { updateId, deleteId } = identitySlice.actions;

export default identitySlice.reducer;
