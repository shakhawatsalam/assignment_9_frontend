import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const dayApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // * Create Department 🚀🚀
    addCloseDays: build.mutation({
      query: (data) => ({
        url: "/closedays",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.closedays],
    }),

    getClosedays: build.query({
      query: () => {
        return {
          url: `/closedays`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.closedays],
    }),
    deleteCloseday: build.mutation({
      query: (data) => ({
        url: `/closedays`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: [tagTypes.closedays],
    }),
  }),
});

export const {
  useAddCloseDaysMutation,
  useGetClosedaysQuery,
  useDeleteClosedayMutation,
} = dayApi;
