import { SkeletonLoaderProps } from "./types"
import { styled } from "@mui/material"

export const SkeletonLoader = styled("div")<SkeletonLoaderProps>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => height};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: #f1f1f1;
  border-radius: 4px;
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`};

  @keyframes loading-skeleton {
    100% {
      transform: translateX(100%);
    }
  }

  &:after {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(90deg, #f1f1f1, #f9f9f9, #f1f1f1);
    transform: translateX(-100%);
    animation-name: loading-skeleton;
    animation-direction: normal;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`
