import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users", // اسم reducer
  initialState: { value: UsersData }, //مقادیر پیش فرض
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
