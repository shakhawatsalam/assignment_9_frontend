import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const servicerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllServices: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/service`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.service],
    }),
    // get single user
    getSingleService: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),

    deleteService: build.mutation({
      query: (id) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  useDeleteServiceMutation,
} = servicerApi;
