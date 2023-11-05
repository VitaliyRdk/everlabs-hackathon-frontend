import { styled } from "@mui/material"
import Lottie from "lottie-react"
import { AudioCardWrapper } from "../../audio-card/styles"

export const AudioCardSkeletonWrapper = styled(AudioCardWrapper)`
  display: flex;
  flex-direction: row;
`

export const AudioCardSkeletonLinesWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const AudioCardSkeletonLottie = styled(Lottie)`
  width: 44px;
  height: 44px;
  margin-right: 16px;

  > svg {
    transform: scale(4) !important;
  }
`
