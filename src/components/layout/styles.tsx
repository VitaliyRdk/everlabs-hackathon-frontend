import { styled } from "@mui/material/styles"
import { SIDEBAR_WIDTH } from "../side-navigation/styles"
import { CURRICULUM_SIDEBAR_WIDTH } from "../curriculum-side-navigation/styles"

export const LayoutWrapper = styled("div")`
  position: relative;
`
export const LayoutContentWrapper = styled("div")<{
  isAudioLibraryPage: boolean
}>`
  width: ${({ isAudioLibraryPage }) =>
    `calc(100% - ${
      isAudioLibraryPage ? SIDEBAR_WIDTH : CURRICULUM_SIDEBAR_WIDTH
    })`};
  margin-left: ${({ isAudioLibraryPage }) =>
    isAudioLibraryPage ? SIDEBAR_WIDTH : CURRICULUM_SIDEBAR_WIDTH};
  padding: 24px;
  min-height: 100vh;
  ${(isAudioLibraryPage) => isAudioLibraryPage && `background: #f9f9f9;`};
`

export const MainContentWrapper = styled("div")`
  max-width: 1200px;
  margin: 0 auto;
`
