import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: "IN",
  mode: "light",
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateMode: (state, action) => {
      state.mode = action.payload;
    },
    updateRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { updateMode, updateRegion } = userInfoSlice.actions;
export default userInfoSlice.reducer;
