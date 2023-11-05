import React, { Dispatch, SetStateAction, useEffect, useRef } from "react"
import {
  AudioCardWrapper,
  AudioCardContentContainer,
  AudioCardContentDescription,
  AudioCardContentFolder,
  AudioCardContentFolderIcon,
  AudioCardContentTitle,
  AudioCardPlayAudio,
} from "./styles"
import PlayAudioIcon from "../../assets/icons/play-audio.svg"
import PauseAudioIcon from "../../assets/icons/pause-audio.svg"
import moment from "moment/moment"
import FolderIcon from "../../assets/icons/folder.svg"

type AudioCardProps = {
  activeAudioId: string
  id: string
  title: string
  link: string
  folderName: string
  src: string
  created_at: string
  setActiveAudioId: Dispatch<SetStateAction<string>>
}

const AudioCard = ({
  activeAudioId,
  id,
  title,
  folderName,
  link,
  created_at,
  src,
  setActiveAudioId,
}: AudioCardProps) => {
  const audioRef = useRef(null)
  const isActiveCurrentAudio = activeAudioId === id

  useEffect(() => {
    const audio = audioRef.current
    if (isActiveCurrentAudio) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [isActiveCurrentAudio])

  return (
    <AudioCardWrapper>
      <audio id={id} ref={audioRef} src={src} />
      {isActiveCurrentAudio ? (
        <AudioCardPlayAudio
          src={PauseAudioIcon}
          alt="Pause audio"
          onClick={() => setActiveAudioId("")}
        />
      ) : (
        <AudioCardPlayAudio
          src={PlayAudioIcon}
          alt="Play audio"
          onClick={() => setActiveAudioId(id)}
        />
      )}
      <AudioCardContentContainer>
        <AudioCardContentTitle href={link} target="_blank">
          {title}
        </AudioCardContentTitle>
        <AudioCardContentDescription>
          Requested {moment(created_at).format("MMMM Do YYYY")} &#9679;{" "}
          {moment(created_at).format("h:mm a")}
        </AudioCardContentDescription>
      </AudioCardContentContainer>
      <AudioCardContentFolder>
        <AudioCardContentFolderIcon src={FolderIcon} />
        {folderName}
      </AudioCardContentFolder>
    </AudioCardWrapper>
  )
}

export default AudioCard
