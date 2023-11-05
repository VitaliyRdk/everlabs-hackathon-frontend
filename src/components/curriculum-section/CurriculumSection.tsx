import React from "react"
import { curriculumContentMock } from "./curriculumContentMock"
import {
  CurriculumDivider,
  CurriculumEmoji,
  CurriculumMinToRead,
  CurriculumSectionWrapper,
  CurriculumStepTitle,
  CurriculumText,
  CurriculumTitle,
  CurriculumTitleWrapper,
} from "./styles"
import curriculumEmojiSrc from "../../assets/icons/curriculum-emoji.svg"
import stepIconSrc from "../../assets/icons/step-icon.svg"

const CurriculumSection = () => {
  return (
    <CurriculumSectionWrapper>
      <CurriculumMinToRead>~1 min read</CurriculumMinToRead>
      <CurriculumTitleWrapper>
        <CurriculumEmoji src={curriculumEmojiSrc} />
        <CurriculumTitle>Documenting your business</CurriculumTitle>
      </CurriculumTitleWrapper>
      <CurriculumDivider />
      <CurriculumTitleWrapper>
        <CurriculumEmoji src={stepIconSrc} />
        <CurriculumStepTitle>Documenting your business</CurriculumStepTitle>
      </CurriculumTitleWrapper>
      <CurriculumText>{curriculumContentMock}</CurriculumText>
    </CurriculumSectionWrapper>
  )
}

export default CurriculumSection
