import { api } from "../api/api"
import { FoldersListResponse } from "./types"

export const foldersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFolderList: builder.query<FoldersListResponse, void>({
      query: () => ({
        url: "folders",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetFolderListQuery } = foldersApi
