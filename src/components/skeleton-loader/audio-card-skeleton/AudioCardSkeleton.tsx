import { SkeletonLoader } from "../styles"
import {
  AudioCardSkeletonLinesWrapper,
  AudioCardSkeletonLottie,
  AudioCardSkeletonWrapper,
} from "./styles"
import loadingAnimation from "../../../assets/lottie/ark-generator.json"

const AudioCardSkeleton = () => {
  return (
    <AudioCardSkeletonWrapper>
      <AudioCardSkeletonLottie animationData={loadingAnimation} loop={true} />
      <AudioCardSkeletonLinesWrapper>
        <SkeletonLoader height="0.875rem" marginBottom="8px" width="70%" />
        <SkeletonLoader height="0.875rem" width="30%" />
      </AudioCardSkeletonLinesWrapper>
    </AudioCardSkeletonWrapper>
  )
}

export default AudioCardSkeleton
