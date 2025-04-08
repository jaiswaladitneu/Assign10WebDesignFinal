import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const storedUser = localStorage.getItem("user");
const storedToken = localStorage.getItem("token");

const preloadedState = {
  auth: {
    user: storedUser ? JSON.parse(storedUser) : null,
    token: storedToken || null,
    isAuthenticated: !!storedToken,
  },
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
});

export default store;
