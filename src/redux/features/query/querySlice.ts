import { createSlice } from "@reduxjs/toolkit";

type IQuery = {
  query: {
    page: number;
    limit: number;
    sortBy: string;
    sortOrder: string;
    searchTerm: string;
  };
};

const initialState: IQuery = {
  query: {
    page: 1,
    limit: 5,
    sortBy: "CreatedAt",
    sortOrder: "asc",
    searchTerm: "",
  },
};

const querySlice = createSlice({
  name: "querySlice",
  initialState,
  reducers: {
    addPage: (state, action) => {
      state.query.page = action.payload;
    },
    addLimit: (state, action) => {
      state.query.limit = action.payload;
    },
    addsortBy: (state, action) => {
      state.query.sortBy = action.payload;
    },
    addSortOrder: (state, action) => {
      state.query.sortOrder = action.payload;
    },
    addSearchTerm: (state, action) => {
      state.query.searchTerm = action.payload;
    },
  },
});

export const { addPage, addLimit, addSortOrder, addSearchTerm, addsortBy } =
  querySlice.actions;

export default querySlice.reducer;
