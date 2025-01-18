### 1. **Create the Redux Folder Structure**

Under the `src` directory, create a folder named `redux`. Inside `redux`, create two files:

- `store.ts`
- `api/baseApi.ts`

### 2. **Setup the Redux Store in `store.ts`**

### 3. **Provide the Redux Store to React**

### 4. **Create `baseApi.ts` for rtk query**

In the `redux/api` folder, create a file named `baseApi.ts` and define your base API configuration:

```typescript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Replace '/api' with your actual API base URL
  tagTypes: ["Resource"], // Define tag types for caching and invalidation
  endpoints: (builder) => ({
    // Example endpoint
    getResources: builder.query<any, void>({
      query: () => "/resources",
      providesTags: ["Resource"],
    }),
  }),
});

export const { useGetResourcesQuery } = baseApi;
```

### 5. **Using `unwrap()`**

`unwrap()` is used with `createAsyncThunk` or RTK Query mutations to handle results outside the promise chain. Example:

```typescript
const handleSubmit = async () => {
  try {
    const result = await someMutation().unwrap();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};
```

---

### 6. **Add TagTypes and Query Functions**

In the `baseApi.ts` file:

- Use `tagTypes` to manage cache invalidation for specific resources.
- Implement custom `queryFn` for advanced query handling, if needed:

```typescript
const customQueryFn = async (args, api, extraOptions, baseQuery) => {
  const result = await baseQuery(args);
  if (result.error) {
    return { error: result.error };
  }
  return { data: result.data };
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Resource"],
  endpoints: (builder) => ({
    getResources: builder.query<any, void>({
      queryFn: customQueryFn, // Use custom query function
    }),
  }),
});
```
