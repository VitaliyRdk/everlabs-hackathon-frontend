import React, { useState } from "react"
import { AudiosByFolderIdResponse } from "../../services/audios/types"
import AudioCardSkeleton from "../skeleton-loader/audio-card-skeleton/AudioCardSkeleton"
import { AudioCardsContainer } from "./styles"
import AudioCard from "../audio-card/AudioCard"

type AudioCardsProps = {
  audios: AudiosByFolderIdResponse
  isGenerating?: boolean
}

const AudioCards = ({ isGenerating, audios }: AudioCardsProps) => {
  const [activeAudioId, setActiveAudioId] = useState()

  return (
    <AudioCardsContainer>
      {isGenerating && <AudioCardSkeleton />}
      {audios.map(({ title, id, link, folder, src, created_at }: any) => (
        <AudioCard
          id={id}
          activeAudioId={activeAudioId}
          setActiveAudioId={setActiveAudioId}
          created_at={created_at}
          title={title}
          key={id}
          link={link}
          folderName={folder.name}
          src={src}
        />
      ))}
    </AudioCardsContainer>
  )
}

export default AudioCards
