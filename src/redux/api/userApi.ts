import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/users`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.user],
    }),
    // get single user
    getSingleUser: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    // update room
    // updateUser: build.mutation({
    //   query: (data) => ({
    //     url: `/users/${data.id}`,
    //     method: "PATCH",
    //     data: data.body,
    //   }),
    //   invalidatesTags: [tagTypes.user],
    // }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useDeleteUserMutation,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = userApi;
