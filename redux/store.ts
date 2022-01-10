import { configureStore, combineReducers } from "@reduxjs/toolkit";
import supportSlice from "./supportSlice";

const rootReducer = combineReducers({
  support: supportSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
