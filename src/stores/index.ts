import { configureStore } from "@reduxjs/toolkit";
import menuCategoryReducer from "./slices/menuCategorySlice";
import menuReducer from "./slices/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    menuCategory: menuCategoryReducer,
  },
});

// => type of a 'Store' Object
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// => Type of action dispatch
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


