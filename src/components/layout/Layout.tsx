import React from "react"
import SideNavigation from "../side-navigation/SideNavigation"
import { Route, Routes } from "react-router-dom"
import {
  LayoutContentWrapper,
  LayoutWrapper,
  MainContentWrapper,
} from "./styles"
import AudioLibrary from "../../pages/audio-library/AudioLibrary"
import NotFound from "../../pages/not-found/NotFound"

const Layout = () => {
  return (
    <LayoutWrapper>
      <SideNavigation />
      <LayoutContentWrapper>
        <MainContentWrapper>
          <Routes>
            <Route path="/" element={<AudioLibrary />} />
            <Route path="/curriculum" element={<div>curriculum</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContentWrapper>
      </LayoutContentWrapper>
    </LayoutWrapper>
  )
}

export default Layout
