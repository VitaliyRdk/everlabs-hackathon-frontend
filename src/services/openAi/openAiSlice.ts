import { api } from "../api/api"
import { SummaryByLinkParams } from "./types"

export const openAiApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSummaryByLink: builder.mutation<void, SummaryByLinkParams>({
      query: (params: SummaryByLinkParams) => ({
        url: `open_ai?link=${encodeURIComponent(params.link)}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetSummaryByLinkMutation } = openAiApi
