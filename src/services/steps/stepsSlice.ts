import { api } from "../api/api"
import { GenerateAudioStepParams, GenerateAudioStepResponse } from "./types"

export const stepsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    generateStepAudio: builder.mutation<
      GenerateAudioStepResponse,
      GenerateAudioStepParams
    >({
      query: ({ content, language_short_name }) => ({
        url: "steps",
        method: "GET",
        params: { content, language_short_name },
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGenerateStepAudioMutation } = stepsApi
