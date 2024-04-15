import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users", // اسم reducer
  initialState: { value: UsersData }, //مقادیر پیش فرض
  reducers: {},
});

export default userSlice.reducer;
