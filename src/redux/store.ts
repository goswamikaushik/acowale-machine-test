import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { feedbackApi } from './feedback-api';

const persistConfig: PersistConfig<ReturnType<typeof appReducer>> = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [feedbackApi.reducerPath]
};

// --- App reducer ---
const appReducer = combineReducers({
  [feedbackApi.reducerPath]: feedbackApi.reducer
});

// --- Persisted reducer ---
const persistedReducer = persistReducer(persistConfig, appReducer);

// --- Store ---
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(feedbackApi.middleware)
});

// --- Persistor ---
export const persistor = persistStore(store);

export type RootStateType = ReturnType<typeof appReducer>;
