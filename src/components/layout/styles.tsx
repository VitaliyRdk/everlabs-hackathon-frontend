import { styled } from "@mui/material/styles"
import { SIDEBAR_WIDTH } from "../side-navigation/styles"

export const LayoutWrapper = styled("div")`
  position: relative;
`
export const LayoutContentWrapper = styled("div")`
  width: calc(100% - ${SIDEBAR_WIDTH});
  margin-left: ${SIDEBAR_WIDTH};
  padding: 24px;
  min-height: 100vh;
`

export const MainContentWrapper = styled("div")`
  max-width: 1200px;
  margin: 0 auto;
`
