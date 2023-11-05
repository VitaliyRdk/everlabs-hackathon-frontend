import Input from "../input/Input"
import Select from "../select/Select"
import { StyledSelectItem } from "../select/styles"
import React, { useState } from "react"
import { useGenerateAudioByLinkMutation } from "../../services/audios/audiosSlice"
import { FoldersListResponse } from "../../services/folders/types"
import { SelectChangeEvent } from "@mui/material"
import Button from "../button/Button"
import { GenerateAudioWrapper } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

type GenerateAudioProps = {
  data: FoldersListResponse
}

const GenerateAudio = ({ data }: GenerateAudioProps) => {
  const [generateAudioByLink] = useGenerateAudioByLinkMutation()
  const [selectedFolder, setSelectedFolder] = useState<string>(data[0].id)
  const [link, setLink] = useState<string>("")

  const handleChangeFolder = (event: SelectChangeEvent<any>) => {
    setSelectedFolder(event.target.value as string)
  }

  const handleChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value)
  }

  return (
    <GenerateAudioWrapper>
      <Input
        icon={<FontAwesomeIcon icon={faLink} />}
        withCountOfSymbols
        value={link}
        fullWidth
        onChange={handleChangeLink}
        placeholder={"Insert a link from a website"}
      />
      <Select value={selectedFolder} onChange={handleChangeFolder}>
        {data.map(({ name, id }) => (
          <StyledSelectItem
            value={id}
            key={id}
            selected={id === selectedFolder}
          >
            {name}
          </StyledSelectItem>
        ))}
      </Select>
      <Button
        text="Generate audio"
        onClick={() =>
          generateAudioByLink({
            link,
            folder_id: selectedFolder,
          })
        }
      />
    </GenerateAudioWrapper>
  )
}

export default GenerateAudio
