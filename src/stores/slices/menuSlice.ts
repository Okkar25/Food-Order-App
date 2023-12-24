import config from "@/config";
import { MenuState, UpdateMenuPayload } from "@/types/menu";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateMenuPayload } from "./../../types/menu";

const initialState: MenuState = {
  items: [], // useState
  isLoading: false,
  error: null,
};

// async action - thunk
// POST
export const createMenu = createAsyncThunk(
  "menu/createMenu",
  async (payload: CreateMenuPayload, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/menu`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const menusFromServer = await response.json();
    thunkApi.dispatch(setMenus(menusFromServer));
  }
);

// PUT
export const updateMenu = createAsyncThunk(
  "menu/updateMenu",
  async (payload: UpdateMenuPayload, thunkApi) => {
    console.log(payload);
    // const response = await fetch(`${config.apiBaseUrl}/menu`, {
    //   method: "PUT",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
    // const menusFromServer = await response.json();
    // thunkApi.dispatch(setMenus(menusFromServer));
  }
);

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    // pure action functions // sync action
    setMenus: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenus } = menuSlice.actions;

export default menuSlice.reducer;
