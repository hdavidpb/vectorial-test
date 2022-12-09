import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./interfaces";

const initialState: IInitialState = {
  showForm: false,
};

export const comonSlice = createSlice({
  initialState,
  name: "comonSlice",
  reducers: {
    changeShowForm: (state) => {
      state.showForm = !state.showForm;
    },
  },
});

export const { changeShowForm } = comonSlice.actions;
export default comonSlice.reducer;
