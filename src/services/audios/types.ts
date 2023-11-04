export type AudiosByFolderIdResponse = {
  id: number
  title: string
  link: string
  folder_id: number
  src: string
  created_at: string
  updated_at: string
}[]

export type AudiosByFolderIdParams = {
  folder_id: number | string
}
