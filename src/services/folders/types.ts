export type FoldersListResponse = {
  id: string
  name: string
  audios_count: number
}[]

export type CreateFolderParams = {
  name: string
}
