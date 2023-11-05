import { styled } from "@mui/material"
import { Link } from "react-router-dom"

export const CURRICULUM_SIDEBAR_WIDTH = "350px"

export const CurriculumSideNavigationWrapper = styled("div")`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: ${CURRICULUM_SIDEBAR_WIDTH};
`

export const SubjectEmoji = styled("img")`
  width: 48px;
  height: 48px;
`

export const SubjectTitle = styled("h2")`
  color: #2a2a2a;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4375rem;
  margin: 8px 0;
`

export const SubjectEstimate = styled("p")`
  color: #8e8e8e;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.83125rem;
  margin: 0;
`

export const SubjectChooseMode = styled("img")`
  margin: 20px 0;
  width: 138px;
  height: 36px;
`

export const SubjectScoreContainer = styled("div")`
  display: flex;
  align-items: center;
`

export const SubjectScoreImage = styled("img")`
  width: 235px;
  height: 6px;
`

export const SubjectScorePercentage = styled("span")`
  color: #000000;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  margin-left: 8px;
`

export const SubjectAudioSummary = styled("audio")`
  margin: 20px 0;
`

export const SubjectStepsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SubjectStepsTitle = styled("h3")`
  color: #2a2a2a;
  align-self: flex-start;
  padding: 4px 24px;
`

export const SubjectStepContainer = styled("div")<{ active?: boolean }>`
  background: ${({ active }) => (active ? "#f1f1f1" : "unset")};
  color: ${({ active }) => (active ? "#6A28EA" : "2A2A2A")};
  width: 100%;
  display: flex;
  align-items: center;
  height: 44px;
  &:hover {
    cursor: pointer;
  }
`

export const SubjectStepListNumber = styled("img")`
  width: 20px;
  height: 20px;
  margin: 0 0 0 24px;
`

export const SubjectStepTitle = styled("h4")`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
  margin: 0 8px;
`

export const SubjectStepCheckmark = styled("img")`
  width: 24px;
  height: 24px;
`

export const SubjectArrowLeft = styled("img")`
  width: 24px;
  height: 24px;
`

export const BackLink = styled(Link)`
  display: flex;
  margin: 24px 24px 32px 24px;
  color: #8e8e8e;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  text-decoration: none;
  align-items: center;
  gap: 0.5rem;
`
