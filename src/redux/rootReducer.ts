import { baseApi } from "./api/baseApi";
import userReducer from "./features/user/userSlice";
export const reducer = {
  query: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
