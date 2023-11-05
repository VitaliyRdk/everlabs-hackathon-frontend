import { FoldersListResponce } from "../folders/types"

export type AudiosByFolderIdResponse = {
  id: number
  title: string
  link: string
  folder: FoldersListResponce
  src: string
  created_at: string
  updated_at: string
}[]

export type AudiosByFolderIdParams = {
  folder_id: number | string
}

export type GenerateAudioByLinkResponse = {
  link: string
}

export type GenerateAudioByLinkParams = {
  link: string
  folder_id: string
}
