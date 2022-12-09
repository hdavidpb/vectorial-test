import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./interfaces";

const initialState: IInitialState = {
  logged: JSON.parse(localStorage.getItem("logged")!!),
  user: "hernan.plazabs1.",
  password: "123456789",
};

export const loginSlice = createSlice({
  initialState,
  name: "loginSlice",
  reducers: {
    login: (state) => {
      state.logged = true;
      localStorage.setItem("logged", JSON.stringify(true));
    },
    signOut: (state) => {
      state.logged = null;
      localStorage.removeItem("logged");
    },
  },
});

export const { login, signOut } = loginSlice.actions;
export default loginSlice.reducer;
