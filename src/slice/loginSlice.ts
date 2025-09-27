


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  username: string;
  isAuthenticated: boolean;
  error: string | null;
  role: string | null;
}

// Load from localStorage if available
const storedLogin = localStorage.getItem("loginState");
const initialState: LoginState = storedLogin
  ? JSON.parse(storedLogin)
  : {
      username: "",
      isAuthenticated: false,
      error: null,
      role: null,
    };

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ username: string; role: string }>
    ) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem("loginState", JSON.stringify(state)); // ✅ persist
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.username = "";
      state.role = null;
      state.isAuthenticated = false;
      state.error = action.payload;
      localStorage.removeItem("loginState");
    },
    logout: (state) => {
      state.username = "";
      state.role = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("loginState"); // ✅ clear storage
    },
  },
});

export const { setCredentials, loginFailed, logout } = loginSlice.actions;
export default loginSlice.reducer;
