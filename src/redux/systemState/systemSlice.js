import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalShow: false,
};
const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setModalShow: (state, action) => {
      state.modalShow = action.payload;
    },
  },
});
// const { action, reducer } = userSlice;
const { actions, reducer } = systemSlice;
export const { setModalShow } = actions;

export default reducer;
