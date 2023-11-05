import Input from "../input/Input"
import Select from "../select/Select"
import { StyledSelectItem } from "../select/styles"
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react"
import { useGenerateAudioByLinkMutation } from "../../services/audios/audiosSlice"
import { FoldersListResponse } from "../../services/folders/types"
import { SelectChangeEvent } from "@mui/material"
import Button from "../button/Button"
import { GenerateAudioWrapper } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { useFormik } from "formik"
import { getLinkFieldSchema } from "./validationSchema"
import { enqueueSnackbar } from "notistack"

type GenerateAudioProps = {
  data: FoldersListResponse
  setIsGenerating: Dispatch<SetStateAction<boolean>>
}

type FormValues = {
  link: string
}

const GenerateAudio = ({ data, setIsGenerating }: GenerateAudioProps) => {
  const [generateAudioByLink, result] = useGenerateAudioByLinkMutation()
  const { isLoading, error } = result
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
      setIsGenerating(true)
      generateAudioByLink({
        folder_id: selectedFolder,
        ...formValues,
      })
    },
    [generateAudioByLink, selectedFolder, setIsGenerating],
  )

  const handleChangeFolder = (event: SelectChangeEvent<any>) => {
    setSelectedFolder(event.target.value as string)
  }

  useEffect(() => {
    if (error) enqueueSnackbar("Something went wrong", { variant: "error" })
    if (!isLoading) setIsGenerating(false)
  }, [error, isLoading, result, setIsGenerating])

  return (
    <GenerateAudioWrapper>
      <Input
        disabled={isLoading}
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
      <Select
        disabled={isLoading}
        value={selectedFolder}
        onChange={handleChangeFolder}
      >
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
        disabled={isLoading}
        text="Generate audio"
        onClick={handleSubmit}
      />
    </GenerateAudioWrapper>
  )
}

export default GenerateAudio
