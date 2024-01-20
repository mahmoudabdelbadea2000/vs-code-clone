import { configureStore } from "@reduxjs/toolkit";
import fileTreeSLice from "./features/fileTreeSLice";

export const store = configureStore({
  reducer: { tree: fileTreeSLice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
