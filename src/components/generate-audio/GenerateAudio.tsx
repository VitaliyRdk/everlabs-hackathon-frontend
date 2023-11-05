import Input from "../input/Input"
import Select from "../select/Select"
import { StyledSelectItem } from "../select/styles"
import React, { useCallback, useState } from "react"
import { useGenerateAudioByLinkMutation } from "../../services/audios/audiosSlice"
import { FoldersListResponse } from "../../services/folders/types"
import { SelectChangeEvent } from "@mui/material"
import Button from "../button/Button"
import { GenerateAudioWrapper } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { useFormik } from "formik"
import { getLinkFieldSchema } from "./validationSchema"

type GenerateAudioProps = {
  data: FoldersListResponse
}

type FormValues = {
  link: string
}

const GenerateAudio = ({ data }: GenerateAudioProps) => {
  const [generateAudioByLink] = useGenerateAudioByLinkMutation()
  const [selectedFolder, setSelectedFolder] = useState<string>(data[0].id)
  const { errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      link: "",
    },
    validateOnChange: true,
    validationSchema: getLinkFieldSchema(),
    onSubmit: (values: FormValues) => submitForm(values),
  })

  const submitForm = useCallback(
    (formValues) => {
      generateAudioByLink({
        folder_id: selectedFolder,
        ...formValues,
      })
    },
    [generateAudioByLink, selectedFolder],
  )

  const handleChangeFolder = (event: SelectChangeEvent<any>) => {
    setSelectedFolder(event.target.value as string)
  }

  return (
    <GenerateAudioWrapper>
      <Input
        error={errors.link}
        id="link"
        name="link"
        icon={<FontAwesomeIcon icon={faLink} />}
        withCountOfSymbols
        value={values.link}
        fullWidth
        onChange={handleChange}
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
      <Button text="Generate audio" onClick={handleSubmit} />
    </GenerateAudioWrapper>
  )
}

export default GenerateAudio
