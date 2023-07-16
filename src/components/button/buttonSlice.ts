import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ButtonState {
  status: boolean;
}

const initialState: ButtonState = {
  status: false,
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    setIsLight: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

export const { setIsLight } = buttonSlice.actions;
export default buttonSlice.reducer;
