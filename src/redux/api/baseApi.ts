// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v1" }),
  endpoints: (builder) => ({
    getSomting: builder.query({
      query: () => ({
        method: "GET",
        url: "/somthing",
      }),
    }),
    addSomting: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/somthingAdd",
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSomtingQuery , useAddSomtingMutation} = baseApi;

