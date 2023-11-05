import React from "react"
import SideNavigation from "../side-navigation/SideNavigation"
import { Route, Routes, useLocation } from "react-router-dom"
import {
  LayoutContentWrapper,
  LayoutWrapper,
  MainContentWrapper,
} from "./styles"
import AudioLibrary from "../../pages/audio-library/AudioLibrary"
import NotFound from "../../pages/not-found/NotFound"
import Curriculum from "../../pages/curriculum/Curriculum"
import CurriculumSideNavigation from "../curriculum-side-navigation/CurriculumSideNavigation"

const Layout = () => {
  const location = useLocation()
  const isAudioLibraryPage = location.pathname === "/"

  return (
    <LayoutWrapper>
      {isAudioLibraryPage ? <SideNavigation /> : <CurriculumSideNavigation />}
      <LayoutContentWrapper isAudioLibraryPage={isAudioLibraryPage}>
        <MainContentWrapper>
          <Routes>
            <Route path="/" element={<AudioLibrary />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContentWrapper>
      </LayoutContentWrapper>
    </LayoutWrapper>
  )
}

export default Layout
