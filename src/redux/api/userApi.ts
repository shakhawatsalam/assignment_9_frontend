import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const AUTH_URL = "/auth";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      // transformResponse: (response) => {
      //   return {
      //     data: response,
      //   };
      // },
      //   invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetAllUserQuery } = userApi;
