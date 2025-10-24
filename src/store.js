import { configureStore } from "@reduxjs/toolkit";
import UserDataSlice from "./redux/UserDataSlice";
export const store = configureStore({
  reducer: {
    UserData: UserDataSlice,
  },
});
