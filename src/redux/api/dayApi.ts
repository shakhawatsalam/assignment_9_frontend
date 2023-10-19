import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const dayApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    alldays: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/day`,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.booking],
    }),
  }),
});

export const { useAlldaysQuery } = dayApi;
