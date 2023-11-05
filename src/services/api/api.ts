import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_URL =
  "https://everlabs-trainual-hackathon-cf7f9d60e877.herokuapp.com/v1"

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Audios", "Folders"],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  keepUnusedDataFor: Number("10"),
  endpoints: () => ({}),
})
