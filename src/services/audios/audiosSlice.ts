import { api } from "../api/api"
import { AudiosByFolderIdParams, AudiosByFolderIdResponse } from "./types"

export const audiosApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAudiosByFolderId: builder.query<
      AudiosByFolderIdResponse,
      AudiosByFolderIdParams
    >({
      query: ({ folder_id }) => ({
        url: "audios",
        method: "GET",
        params: { folder_id }
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetAudiosByFolderIdQuery } = audiosApi
