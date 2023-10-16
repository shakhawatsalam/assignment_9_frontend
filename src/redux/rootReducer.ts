import { baseApi } from "./api/baseApi";
import queryReducer from "./features/query/querySlice";
export const reducer = {
  query: queryReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
