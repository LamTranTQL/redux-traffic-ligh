import { configureStore } from "@reduxjs/toolkit";
import buttonSliceReducer from "../components/button/buttonSlice";

const store = configureStore({
  reducer: {
    button: buttonSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
