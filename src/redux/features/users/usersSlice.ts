import { IInitialState, User } from "./interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IInitialState = {
  users: JSON.parse(localStorage.getItem("users")!!) || [],
  formUserValues: {
    name: "",
    lastName: "",
    company: "",
    email: "",
  },
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    changeFormValues: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      state.formUserValues[action.payload.name] = action.payload.value;
    },

    createUser: (state, action: PayloadAction<User>) => {
      const users = [...state.users, action.payload];
      state.users = users;
      localStorage.setItem("users", JSON.stringify(users));
      state.formUserValues = initialState.formUserValues;
    },
    adminDeleteUser: (state, action: PayloadAction<string>) => {
      const newUsers = state.users.filter(
        (user) => user.email !== action.payload
      );
      state.users = newUsers;
      localStorage.setItem("users", JSON.stringify(newUsers));
    },
  },
});

export const { changeFormValues, createUser, adminDeleteUser } =
  userSlice.actions;
export default userSlice.reducer;
