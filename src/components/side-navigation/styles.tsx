import { styled } from "@mui/material"
import { NavLink } from "react-router-dom"

export const SIDEBAR_WIDTH = "220px"

export const SidebarContainer = styled("div")`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 16px;
  z-index: 100;
  width: ${SIDEBAR_WIDTH};
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
`

export const Logo = styled("img")`
  display: block;
  margin: 0 auto 24px auto;
  max-width: 118px;
  height: 52px;
`

export const StyledNavLinkWrapper = styled(NavLink)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  marginBottom: "16px",
  textDecoration: "none",
  borderRadius: "2.875rem",
  height: "2.875rem",
  paddingRight: "calc(1.125rem)",
  paddingLeft: "0.25rem",
  color: "rgb(42, 42, 42)",
  alignItems: "center",

  "&.active": {
    fontWeight: "bold",
    color: "rgb(106, 40, 234)",
    backgroundColor: "rgba(106, 40, 234, 0.05)",
  },
}))

export const NavLinkIconWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.875rem;
  height: 2.875rem;
`

export const NavLinkText = styled("div")`
  font-size: 0.889rem;
  line-height: 1.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
