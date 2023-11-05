import React from "react"
import { StyledButton } from "./styles"
import { CircularProgress } from "@mui/material"

type ButtonProps = {
  text: string
  onClick: () => void
  disabled?: boolean
  className?: string
  loading?: boolean
}

const Button = ({
  className = "",
  onClick,
  text,
  disabled = false,
  loading = false,
}: ButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled}>
      {loading ? <CircularProgress size={"1rem"} /> : text}
    </StyledButton>
  )
}

export default Button
