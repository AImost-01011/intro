import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type supportType = {
  scroll: number;
  isMordal: boolean;
  nowPage: number;
};

const initialState = {
  scroll: 0,
  isMordal: false,
  nowPage: 0,
};

const supportSlice = createSlice({
  name: "support",
  initialState,
  reducers: {
    watchScroll(state: supportType, action: PayloadAction<number>) {
      state.scroll = action.payload;
    },
    switchMordal(state: supportType, action: PayloadAction) {
      state.isMordal = !state.isMordal;
    },
    changePage(state: supportType, action: PayloadAction<number>) {
      state.nowPage = action.payload;
    },
  },
});

export const { watchScroll, switchMordal, changePage } = supportSlice.actions;
export default supportSlice.reducer;
