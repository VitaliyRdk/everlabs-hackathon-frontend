import React from "react"
import {
  Logo,
  NavLinkIconWrapper,
  NavLinkText,
  SidebarContainer,
  StyledNavLinkWrapper,
} from "./styles"
import { Link } from "react-router-dom"
import TrainualLogo from "../../assets/icons/trainual-logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadphones, faBook } from "@fortawesome/free-solid-svg-icons"

const SideNavigation = () => {
  return (
    <SidebarContainer>
      <Link to={"/"}>
        <Logo src={TrainualLogo} />
      </Link>

      <StyledNavLinkWrapper to={"/"}>
        <NavLinkIconWrapper>
          <FontAwesomeIcon icon={faHeadphones} />
        </NavLinkIconWrapper>
        <NavLinkText>Audio library</NavLinkText>
      </StyledNavLinkWrapper>

      <StyledNavLinkWrapper to={"/curriculum"}>
        <NavLinkIconWrapper>
          <FontAwesomeIcon icon={faBook} />
        </NavLinkIconWrapper>
        <NavLinkText>Curriculum</NavLinkText>
      </StyledNavLinkWrapper>
    </SidebarContainer>
  )
}

export default SideNavigation
