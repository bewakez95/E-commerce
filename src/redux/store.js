import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import userReducer from "./auth/userSlice";
import systemReducer from "./systemState/systemSlice";
import categoryReducer from "../pages/category/categorySlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
// /persist
const reducers = combineReducers({
  userInfo: userReducer,
  category: categoryReducer,
  system: systemReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
});

// export default store;
