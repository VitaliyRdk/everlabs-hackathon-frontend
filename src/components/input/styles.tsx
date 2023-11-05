import { OutlinedInput, styled } from "@mui/material"

export const StyledInput = styled(OutlinedInput)`
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
      border-color: #e3e3e3 !important;
      border-width: 1px !important;
    }
  }

  &.Mui-focused {
    > fieldset {
      border-color: #6a28ea !important;
      border-width: 1px !important;
    }
  }
`

export const InputWrapper = styled("div")<{ fullWidth: boolean }>`
  display: flex;
  align-items: center;
  ${({ fullWidth }) => fullWidth && "width: 100%"};
`

export const InputSymbolsCount = styled("span")`
  min-width: 45px;
  margin-left: 8px;
  font-size: 11px;
  font-weight: 500;
  color: #000;
`

export const InputIconWrapper = styled("div")<{ isHovered: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 8px;
  ${({ isHovered }) => `color: ${isHovered ? "#6a28ea" : "#8e8e8e"}}`};
`
