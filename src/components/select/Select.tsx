import React from "react"
import { SelectChangeEvent } from "@mui/material"
import { StyledSelect } from "./styles"

type SelectProps = {
  value: string
  onChange: (event: SelectChangeEvent<any>) => void
  children: React.ReactNode
}

const Select = ({ value = "", onChange, children }: SelectProps) => {
  return (
    <StyledSelect
      value={value}
      onChange={(event: SelectChangeEvent<any>) => onChange(event)}
    >
      {children}
    </StyledSelect>
  )
}

export default Select
