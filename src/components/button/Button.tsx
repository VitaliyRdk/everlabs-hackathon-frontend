import React from "react"
import { StyledButton } from "./styles"

type ButtonProps = {
  text: string
  onClick: () => void
  disabled?: boolean
}

const Button = ({ onClick, text, disabled = false }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  )
}

export default Button
