import { api } from "../api/api"
import { FoldersListResponce } from "./types"

export const foldersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFolderList: builder.query<FoldersListResponce, void>({
      query: () => ({
        url: "folders",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetFolderListQuery } = foldersApi
