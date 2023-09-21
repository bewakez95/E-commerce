import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  category: {},
  categoryList: [],
};
const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.categoryList = action.payload;
    },
  },
});
// const { action, reducer } = userSlice;
const { actions, reducer } = CategorySlice;
export const { setCategoryList, setSelectedCategory } = actions;

export default reducer;
