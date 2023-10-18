import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const servicerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // * Create Department 🚀🚀
    addService: build.mutation({
      query: (data) => ({
        url: "/service",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
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
    updateService: build.mutation({
      query: (data) => ({
        url: `/service/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} = servicerApi;
