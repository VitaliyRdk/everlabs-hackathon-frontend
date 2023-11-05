import { api } from "../api/api"
import { CreateFolderParams, FoldersListResponse } from "./types"

export const foldersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFolderList: builder.query<FoldersListResponse, void>({
      query: () => ({
        url: "folders",
        method: "GET",
      }),
      providesTags: () => [{ type: "Folders" }],
    }),
    createFolder: builder.mutation<void, CreateFolderParams>({
      query: ({ name }: CreateFolderParams) => ({
        url: `folders`,
        method: "POST",
        params: { name },
      }),
      invalidatesTags: () => [{ type: "Folders" }],
    }),
  }),
  overrideExisting: false,
})

export const { useGetFolderListQuery, useCreateFolderMutation } = foldersApi
