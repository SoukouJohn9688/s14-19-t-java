import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userRol: null,
  isAuthenticated: false,
  userName: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userRol = action.payload.userRol;
      state.userName = action.payload.userName; 
    },
    logout(state) {
      state.userRol = null;
      state.isAuthenticated = false;
      state.userName = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

