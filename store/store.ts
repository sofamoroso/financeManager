// The Redux store is where all your state lives, and it's a central place for managing and accessing the state.
// Since you're using Redux Toolkit, setting up the store is simplified.

import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../categories/categorySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
