import { combineReducers, configureStore } from '@reduxjs/toolkit';
import identitySlice from './identitySlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk';
import contactSlice from './contactSlice';
import { activeConversationSlice } from './activeConversationSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  identity: identitySlice,
  contact: contactSlice,
  activeConversation: activeConversationSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});
