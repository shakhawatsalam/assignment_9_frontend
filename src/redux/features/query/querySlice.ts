import { createSlice } from "@reduxjs/toolkit";

export type IQuery = {
  query: {
    limit: string;
  };
};

const initialState: IQuery = {
  query: {
    limit: "5",
  },
};

const querySlice = createSlice({
  name: "querySlice",
  initialState,
  reducers: {
    addLimit: (state, action) => {
      state.query.limit = action.payload;
    },
  },
});

export const { addLimit } = querySlice.actions;

export default querySlice.reducer;
