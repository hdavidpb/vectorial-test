import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/loginSlice";
import comonReducer from "./features/comon/comonSlice";
import userReducer from "./features/users/usersSlice";
export const store = configureStore({
  reducer: { loginReducer, comonReducer, userReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
