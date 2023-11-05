import { api } from "../api/api"
import {
  AudiosByFolderIdParams,
  AudiosByFolderIdResponse,
  GenerateAudioByLinkParams,
  GenerateAudioByLinkResponse,
} from "./types"

export const audiosApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAudiosByFolderId: builder.query<
      AudiosByFolderIdResponse,
      AudiosByFolderIdParams
    >({
      query: ({ folder_id }) => ({
        url: "audios",
        method: "GET",
        params: { folder_id },
      }),
    }),
    generateAudioByLink: builder.mutation<
      GenerateAudioByLinkResponse,
      GenerateAudioByLinkParams
    >({
      query: ({ link, folder_id }) => ({
        url: "audios",
        method: "POST",
        params: { link, folder_id },
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetAudiosByFolderIdQuery, useGenerateAudioByLinkMutation } =
  audiosApi
