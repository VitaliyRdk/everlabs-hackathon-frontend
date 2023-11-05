import React, { Dispatch, SetStateAction, useRef } from "react"
import { LanguageShortName } from "../../services/steps/types"
import {
  StyledCurriculumAudioCardPlayAudio,
  StyledCurriculumSplitButton,
  StyledCurriculumSplitButtonWrapper,
} from "./styles"
import Select from "../select/Select"
import { SelectChangeEvent } from "@mui/material"
import { StyledSelectItem } from "../select/styles"
import PauseAudioIcon from "../../assets/icons/pause-audio.svg"
import PlayAudioIcon from "../../assets/icons/play-audio.svg"

type CurriculumSplitButtonProps = {
  isActiveAudio: boolean
  isLoading?: boolean
  src: string | undefined
  language: LanguageShortName
  onClick: () => void
  onChangeLanguage: (event: SelectChangeEvent<any>) => void
  setIsActiveAudio: Dispatch<SetStateAction<boolean>>
}

const CurriculumSplitButton = ({
  isActiveAudio,
  src,
  onClick,
  onChangeLanguage,
  language,
  isLoading,
  setIsActiveAudio,
}: CurriculumSplitButtonProps) => {
  const audioRef = useRef(null)

  const handleClickOnPlayAudio = () => {
    audioRef.current.play()
    setIsActiveAudio(true)
  }

  const handleClickOnPauseAudio = () => {
    audioRef.current.pause()
    setIsActiveAudio(false)
  }

  return (
    <StyledCurriculumSplitButtonWrapper>
      <Select value={language} onChange={onChangeLanguage}>
        <StyledSelectItem selected={language === "en"} value="en">
          English
        </StyledSelectItem>
        <StyledSelectItem selected={language === "es"} value="es">
          Spanish
        </StyledSelectItem>
        <StyledSelectItem selected={language === "ua"} value="ua">
          Ukrainian
        </StyledSelectItem>
      </Select>

      {src ? (
        <>
          <audio ref={audioRef} src={src} />
          {isActiveAudio ? (
            <StyledCurriculumAudioCardPlayAudio
              src={PauseAudioIcon}
              alt="Pause audio"
              onClick={handleClickOnPauseAudio}
            />
          ) : (
            <StyledCurriculumAudioCardPlayAudio
              src={PlayAudioIcon}
              alt="Play audio"
              onClick={handleClickOnPlayAudio}
            />
          )}
        </>
      ) : (
        <StyledCurriculumSplitButton
          loading={isLoading}
          disabled={isLoading}
          onClick={onClick}
          text="Generate audio"
        />
      )}
    </StyledCurriculumSplitButtonWrapper>
  )
}

export default CurriculumSplitButton
