import { OutlinedInput, styled } from "@mui/material"

export const StyledInput = styled(OutlinedInput)<{ error: boolean }>`
  height: 36px;
  padding: 8px;
  font-size: 14px;
  color: #8e8e8e;
  font-weight: 500;

  input {
    padding: 0;
  }

  &,
  &:hover {
    fieldset {
      border-color: ${({ error }) =>
        error ? "#F96467" : "#e3e3e3"} !important;
      border-width: 1px !important;
    }
  }

  &.Mui-focused {
    > fieldset {
      border-color: ${({ error }) => !error && "#6a28ea"} !important;
      border-width: 1px !important;
    }
  }
`

export const InputWrapper = styled("div")<{ fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ fullWidth }) => fullWidth && "width: 100%"};
`

export const InputMainWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const InputSymbolsCount = styled("span")`
  min-width: 45px;
  margin-left: 8px;
  font-size: 11px;
  font-weight: 500;
  color: #000;
`

export const InputIconWrapper = styled("div")<{
  isHovered: boolean
  error: boolean
}>`
  display: flex;
  align-items: center;
  margin-right: 8px;
  ${({ isHovered, error }) =>
    `color: ${error ? "#F96467" : isHovered ? "#6a28ea" : "#8e8e8e"}}`};
`

export const InputErrorWrapper = styled("div")`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: #f96467;
  margin-top: 4px;
  margin-left: 28px;
`

export const InputErrorIcon = styled("img")`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`
