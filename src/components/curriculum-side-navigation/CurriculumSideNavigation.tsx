import React from "react"
import {
  BackLink,
  CurriculumSideNavigationWrapper,
  SubjectArrowLeft,
  SubjectAudioSummary,
  SubjectChooseMode,
  SubjectEmoji,
  SubjectEstimate,
  SubjectScoreContainer,
  SubjectScoreImage,
  SubjectScorePercentage,
  SubjectStepCheckmark,
  SubjectStepContainer,
  SubjectStepListNumber,
  SubjectStepsContainer,
  SubjectStepsTitle,
  SubjectStepTitle,
  SubjectTitle,
} from "./styles"
import SubjectEmojiIcon from "../../assets/icons/subject-emoji.svg"
import ChooseModeIcon from "../../assets/icons/choose-mode.svg"
import SubjectScoreIcon from "../../assets/icons/subject-score.svg"
import SubjectStepListNumberIcon from "../../assets/icons/subject-step-list-number.svg"
import SubjectStepCheckmarkIcon from "../../assets/icons/subject-step-checkmark.svg"
import SubjectArrowLeftIcon from "../../assets/icons/arrow-left.svg"

const CurriculumSideNavigation = () => {
  return (
    <CurriculumSideNavigationWrapper>
      <BackLink to="/">
        <SubjectArrowLeft src={SubjectArrowLeftIcon} />
        Getting Started With Trainual
      </BackLink>
      <SubjectEmoji src={SubjectEmojiIcon} />
      <SubjectTitle>Documenting your business</SubjectTitle>
      <SubjectEstimate>~1 min read</SubjectEstimate>
      <SubjectChooseMode src={ChooseModeIcon} />
      <SubjectScoreContainer>
        <SubjectScoreImage src={SubjectScoreIcon} />
        <SubjectScorePercentage>100%</SubjectScorePercentage>
      </SubjectScoreContainer>
      <SubjectAudioSummary controls>
        <source
          src="https://storage.googleapis.com/hackaton-trainual/maximizing_eos_accountability_chart.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </SubjectAudioSummary>
      <SubjectStepsContainer>
        <SubjectStepsTitle>Steps</SubjectStepsTitle>
        <SubjectStepContainer active>
          <SubjectStepListNumber src={SubjectStepListNumberIcon} />
          <SubjectStepTitle>How to create content in Trainual</SubjectStepTitle>
          <SubjectStepCheckmark src={SubjectStepCheckmarkIcon} />
        </SubjectStepContainer>
        <SubjectStepContainer>
          <SubjectStepListNumber src={SubjectStepListNumberIcon} />
          <SubjectStepTitle>How to create content in Trainual</SubjectStepTitle>
          <SubjectStepCheckmark src={SubjectStepCheckmarkIcon} />
        </SubjectStepContainer>
      </SubjectStepsContainer>
    </CurriculumSideNavigationWrapper>
  )
}

export default CurriculumSideNavigation
