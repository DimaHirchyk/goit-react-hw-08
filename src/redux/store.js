import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./filter/filtersSlice";
import contactsSlice from "./contact/slice";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filterSliceReducer,
    auth: authReducer,
  },
});
