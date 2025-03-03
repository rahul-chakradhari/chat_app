import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { isLightTheme: true }, // ✅ Object me wrap karna better hai
  reducers: {
    toggleTheme: (state) => {
      state.isLightTheme = !state.isLightTheme; // ✅ Correct way (mutating)
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
