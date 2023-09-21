import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalShow: false,
};
const SystemSlice = createSlice({
  name: "modalShow",
  initialState,
  reducers: {
    setModalShow: (state, action) => {
      state.modalShow = action.payload;
    },
  },
});
// const { action, reducer } = userSlice;
const { actions, reducer } = SystemSlice;
export const { setModalShow } = actions;

export default reducer;
