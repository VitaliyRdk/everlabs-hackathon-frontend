import React from "react"
import moment from "moment"
import {
  AudioCard,
  AudioCardContentContainer,
  AudioCardContentDescription,
  AudioCardContentFolder,
  AudioCardContentFolderIcon,
  AudioCardContentTitle,
  AudioCardPlayAudio,
  AudioCardsContainer,
} from "./styles"
import PlayAudioIcon from "../../assets/icons/play-audio.svg"
import FolderIcon from "../../assets/icons/folder.svg"
import { AudiosByFolderIdResponse } from "../../services/audios/types"
import AudioCardSkeleton from "../skeleton-loader/audio-card-skeleton/AudioCardSkeleton"

type AudioCardsProps = {
  audios: AudiosByFolderIdResponse
  isGenerating?: boolean
}

const AudioCards = ({ isGenerating, audios }: AudioCardsProps) => {
  return (
    <AudioCardsContainer>
      {isGenerating && <AudioCardSkeleton />}
      {audios.map((item: any, index: number) => {
        return (
          <AudioCard key={index}>
            <AudioCardPlayAudio src={PlayAudioIcon} alt="Play audio" />
            <AudioCardContentContainer>
              <AudioCardContentTitle href={item.link} target="_blank">
                {item.title}
              </AudioCardContentTitle>
              <AudioCardContentDescription>
                Requested {moment(item.created_at).format("MMMM Do YYYY")}{" "}
                &#9679; {moment(item.created_at).format("h:mm a")}
              </AudioCardContentDescription>
            </AudioCardContentContainer>
            <AudioCardContentFolder>
              <AudioCardContentFolderIcon src={FolderIcon} />
              {item.folder.name}
            </AudioCardContentFolder>
          </AudioCard>
        )
      })}
    </AudioCardsContainer>
  )
}

export default AudioCards
