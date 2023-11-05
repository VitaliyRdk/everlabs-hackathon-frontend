import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_URL = "http://localhost:3000/v1"

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Audios", "Folders"],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  keepUnusedDataFor: Number("10"),
  endpoints: () => ({}),
})
