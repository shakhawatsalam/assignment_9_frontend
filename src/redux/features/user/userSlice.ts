import { createSlice } from "@reduxjs/toolkit";

export type IAuth = {
  auth: {
    userId: string;
    role: string;
  };
};

const initialState: IAuth = {
  auth: {
    userId: "",
    role: "",
  },
};

const userSlice = createSlice({
  name: "querySlice",
  initialState,
  reducers: {
    logInUser: (state, action) => {
      (state.auth.userId = action.payload.userId),
        (state.auth.role = action.payload.role);
    },
  },
});

export const { logInUser } = userSlice.actions;

export default userSlice.reducer;
