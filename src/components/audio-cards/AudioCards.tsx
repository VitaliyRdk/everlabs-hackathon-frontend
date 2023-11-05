import React from "react"
import moment from "moment"
import {
  AudioCard,
  AudioCardContentContainer,
  AudioCardContentDescription,
  AudioCardContentFolder,
  AudioCardContentTitle,
  AudioCardPlayAudio,
  AudioCardsContainer,
} from "./styles"
import PlayAudioIcon from "../../assets/icons/play-audio.svg"
import FolderIcon from "../../assets/icons/folder.svg"

const AudioCards = ({ audios }: any) => {
  return (
    <AudioCardsContainer>
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
              <img src={FolderIcon} />
              {item.folder_id}
            </AudioCardContentFolder>
          </AudioCard>
        )
      })}
    </AudioCardsContainer>
  )
}

export default AudioCards
