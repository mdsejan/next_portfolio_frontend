import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

// Store configuration
export const makeStore = () => {
  return configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware)
  });
};

// Create the store and persistor
export const store = makeStore();

// Types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
