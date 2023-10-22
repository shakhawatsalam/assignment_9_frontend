import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const timeSlotApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // * Create Department 🚀🚀
    addTimeslot: build.mutation({
      query: (data) => ({
        url: "/time-slots/create-time-slot",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.timeslots],
    }),

    getAllSlots: build.query({
      query: (arg) => {
        return {
          url: `/time-slots?date=${arg}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.timeslots],
    }),
    // deleteCloseday: build.mutation({
    //   query: (data) => ({
    //     url: `/closedays`,
    //     method: "DELETE",
    //     body: data,
    //   }),
    //   invalidatesTags: [tagTypes.closedays],
    // }),
  }),
});

export const { useAddTimeslotMutation, useGetAllSlotsQuery } = timeSlotApi;
