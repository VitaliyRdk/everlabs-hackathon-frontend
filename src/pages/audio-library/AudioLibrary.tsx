import React, { useRef, useState } from "react"
import { GenerateAudioWrapper, PageTitle } from "./styles"
import { OutlinedInput, Select, TextField } from "@mui/material"
import { useGetFolderListQuery } from "../../services/folders/foldersSlice"
import Tabs from "../../components/tabs/Tabs"
import { useGetAudiosByFolderIdQuery } from "../../services/audios/audiosSlice"
import AudioCards from "../../components/audio-cards/AudioCards"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const AudioLibrary = () => {
  const [activeTab, setActiveTab] = useState("all")
  const { data, isLoading } = useGetFolderListQuery()
  const { data: audios } = useGetAudiosByFolderIdQuery({ folder_id: activeTab })
  const textInputRef = useRef()
  const handleOnClick = (tab) => {
    setActiveTab(tab)
  }

  if (!data || !audios) return null

  return (
    <div>
      <PageTitle>Audio Library</PageTitle>
      <GenerateAudioWrapper>
        <TextField
          fullWidth
          inputRef={textInputRef}
          label="Insert a link from a website"
          variant="outlined"
        />

        {/*<Select*/}
        {/*  multiple*/}
        {/*  displayEmpty*/}
        {/*  value={personName}*/}
        {/*  onChange={handleChange}*/}
        {/*  input={<OutlinedInput />}*/}
        {/*  renderValue={(selected) => {*/}
        {/*    if (selected.length === 0) {*/}
        {/*      return <em>Placeholder</em>*/}
        {/*    }*/}

        {/*    return selected.join(", ")*/}
        {/*  }}*/}
        {/*  MenuProps={MenuProps}*/}
        {/*  inputProps={{ "aria-label": "Without label" }}*/}
        {/*>*/}
        {/*  <MenuItem disabled value="">*/}
        {/*    <em>Placeholder</em>*/}
        {/*  </MenuItem>*/}
        {/*  {names.map((name) => (*/}
        {/*    <MenuItem*/}
        {/*      key={name}*/}
        {/*      value={name}*/}
        {/*      style={getStyles(name, personName, theme)}*/}
        {/*    >*/}
        {/*      {name}*/}
        {/*    </MenuItem>*/}
        {/*  ))}*/}
        {/*</Select>*/}
      </GenerateAudioWrapper>
      <Tabs activeTab={activeTab} handleOnClick={handleOnClick} data={data} />
      <AudioCards audios={audios} />
    </div>
  )
}

export default AudioLibrary
