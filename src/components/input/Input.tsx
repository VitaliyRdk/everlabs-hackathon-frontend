import React, { useState } from "react"
import {
  InputIconWrapper,
  InputSymbolsCount,
  InputWrapper,
  StyledInput,
} from "./styles"
import { Icon } from "@mui/material"

type InputProps = {
  icon?: React.ReactNode
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  placeholder?: string
  fullWidth?: boolean
  withCountOfSymbols?: boolean
}

const Input = ({
  icon,
  value = "",
  fullWidth = false,
  onChange,
  disabled = false,
  placeholder = "",
  withCountOfSymbols = false,
}: InputProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <InputWrapper fullWidth={fullWidth}>
      {icon && (
        <InputIconWrapper isHovered={isHovered}>{icon}</InputIconWrapper>
      )}
      <StyledInput
        value={value}
        fullWidth={fullWidth}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {withCountOfSymbols && (
        <InputSymbolsCount>{value.length}/100</InputSymbolsCount>
      )}
    </InputWrapper>
  )
}

export default Input
