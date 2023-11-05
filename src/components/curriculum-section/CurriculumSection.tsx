import React, { useEffect, useState } from "react"
import { curriculumContentMock } from "./curriculumContentMock"
import {
  CurriculumDivider,
  CurriculumEmoji,
  CurriculumMinToRead,
  CurriculumSectionWrapper,
  CurriculumStepTitle,
  CurriculumStepTitleContainer,
  CurriculumStepTitleWrapper,
  CurriculumText,
  CurriculumTitle,
  CurriculumTitleWrapper,
} from "./styles"
import curriculumEmojiSrc from "../../assets/icons/curriculum-emoji.svg"
import stepIconSrc from "../../assets/icons/step-icon.svg"
import { useGenerateStepAudioMutation } from "../../services/steps/stepsSlice"
import CurriculumSplitButton from "../curriculum-split-button/CurriculumSplitButton"
import { LanguageShortName } from "../../services/steps/types"
import { SelectChangeEvent } from "@mui/material"
import { enqueueSnackbar } from "notistack"

const CurriculumSection = () => {
  const [generateStepAudio, result] = useGenerateStepAudioMutation()
  const { error, data, reset } = result
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageShortName>("en")

  const onChangeLanguage = (event: SelectChangeEvent<any>) => {
    reset()
    setSelectedLanguage(event.target.value)
  }

  useEffect(() => {
    if (error) enqueueSnackbar("Something went wrong", { variant: "error" })
  }, [error])

  return (
    <CurriculumSectionWrapper>
      <CurriculumMinToRead>~1 min read</CurriculumMinToRead>
      <CurriculumTitleWrapper>
        <CurriculumEmoji src={curriculumEmojiSrc} />
        <CurriculumTitle>Documenting your business</CurriculumTitle>
      </CurriculumTitleWrapper>
      <CurriculumDivider />
      <CurriculumStepTitleWrapper>
        <CurriculumStepTitleContainer>
          <CurriculumEmoji src={stepIconSrc} />
          <CurriculumStepTitle>Documenting your business</CurriculumStepTitle>
        </CurriculumStepTitleContainer>

        <CurriculumSplitButton
          isLoading={result.isLoading}
          src={data?.src}
          language={selectedLanguage}
          onChangeLanguage={onChangeLanguage}
          onClick={() =>
            generateStepAudio({
              language_short_name: selectedLanguage,
              content: JSON.stringify(curriculumContentMock),
            })
          }
        />
      </CurriculumStepTitleWrapper>
      <CurriculumText>{curriculumContentMock}</CurriculumText>
    </CurriculumSectionWrapper>
  )
}

export default CurriculumSection
