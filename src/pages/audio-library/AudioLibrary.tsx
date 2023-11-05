import React, { useState } from "react"
import { PageTitle } from "./styles"
import {
  useCreateFolderMutation,
  useGetFolderListQuery,
} from "../../services/folders/foldersSlice"
import { useGetAudiosByFolderIdQuery } from "../../services/audios/audiosSlice"
import Tabs from "../../components/tabs/Tabs"
import AudioCards from "../../components/audio-cards/AudioCards"
import GenerateAudio from "../../components/generate-audio/GenerateAudio"
import AudioCardSkeleton from "../../components/skeleton-loader/audio-card-skeleton/AudioCardSkeleton"

const AudioLibrary = () => {
  const { data, isLoading } = useGetFolderListQuery()
  const [activeTab, setActiveTab] = useState("all")
  const { data: audios } = useGetAudiosByFolderIdQuery({ folder_id: activeTab })
  const [createFolder] = useCreateFolderMutation()

  if (!data || !audios) return null
  if (isLoading) return <div>Loading...</div>

  const handleOnClick = (tab) => {
    setActiveTab(tab)
  }

  const handleCreateFolder = ({ name }) => {
    createFolder({ name })
  }

  return (
    <div>
      <PageTitle>Audio Library</PageTitle>
      <GenerateAudio data={data} />
      <Tabs
        activeTab={activeTab}
        handleOnClick={handleOnClick}
        handleCreateFolder={handleCreateFolder}
        data={data}
      />
      <AudioCards audios={audios} />
      <AudioCardSkeleton />
    </div>
  )
}

export default AudioLibrary
