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

const persistConfig: PersistConfig<ReturnType<typeof appReducer>> = {
  key: 'root',
  version: 1,
  storage
};

// --- App reducer ---
const appReducer = combineReducers({
  //   // Slices
  //   auth: authSlice.reducer,
  //   google: googleSlice.reducer,
  //   resume: resumeSlice.reducer,
  //   template: templateSlice.reducer,
  //   // RTK Query API
  //   [authApi.reducerPath]: authApi.reducer,
  //   [googleApi.reducerPath]: googleApi.reducer,
  //   [resumeApi.reducerPath]: resumeApi.reducer,
  //   [templateApi.reducerPath]: templateApi.reducer
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
    })
});

// --- Persistor ---
export const persistor = persistStore(store);

export type RootStateType = ReturnType<typeof appReducer>;
