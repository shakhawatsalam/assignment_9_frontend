import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allBooking: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/booking`,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.booking],
    }),
    // get Single Booking
    getSingleBooking: build.query({
      query: (id) => ({
        url: `/booking/${id}`,
        method: "GET",
      }),
    }),

    updateBooking: build.mutation({
      query: (data) => ({
        url: `/booking/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useAllBookingQuery,
  useGetSingleBookingQuery,
  useUpdateBookingMutation,
} = bookingApi;
