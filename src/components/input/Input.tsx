import React, { useState } from "react"
import {
  InputErrorIcon,
  InputErrorWrapper,
  InputIconWrapper,
  InputMainWrapper,
  InputSymbolsCount,
  InputWrapper,
  StyledInput,
} from "./styles"
import errorIcon from "../../assets/icons/error.svg"

type InputProps = {
  id?: string
  name?: string
  icon?: React.ReactNode
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  placeholder?: string
  fullWidth?: boolean
  withCountOfSymbols?: boolean
  error?: string
}

const Input = ({
  id = "",
  name = "",
  icon,
  value = "",
  fullWidth = false,
  onChange,
  disabled = false,
  placeholder = "",
  error = "",
  withCountOfSymbols = false,
}: InputProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <InputWrapper fullWidth={fullWidth}>
      <InputMainWrapper>
        {icon && (
          <InputIconWrapper error={Boolean(error)} isHovered={isHovered}>
            {icon}
          </InputIconWrapper>
        )}
        <StyledInput
          disabled={disabled}
          error={Boolean(error)}
          id={id}
          name={name}
          value={value}
          fullWidth={fullWidth}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          onChange={onChange}
          placeholder={placeholder}
        />
        {withCountOfSymbols && (
          <InputSymbolsCount>{value.length}/100</InputSymbolsCount>
        )}
      </InputMainWrapper>
      {error && (
        <InputErrorWrapper>
          <InputErrorIcon src={errorIcon} />
          <span>{error}</span>
        </InputErrorWrapper>
      )}
    </InputWrapper>
  )
}

export default Input
