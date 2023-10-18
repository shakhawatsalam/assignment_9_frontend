import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userRegister: build.mutation({
      query: (registarData) => ({
        url: `/auth/signup`,
        method: "POST",
        body: registarData.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    userLogin: build.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation } = authApi;
