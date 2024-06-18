import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRol: null,
  isAuthenticated: false,
  userName: null,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken(state, action) {
      state.token = action.payload;
    },
    login(state, action) {
      state.isAuthenticated = true;
      state.userRol = action.payload.userRol;
      state.userName = action.payload.userName;
      state.token = "hola";
      
    },
    logout(state) {
      state.userRol = null;
      state.isAuthenticated = false;
      state.userName = null;
      state.token = "";
    },
  },
});

export const { login, logout, saveToken } = authSlice.actions;

export default authSlice.reducer;
