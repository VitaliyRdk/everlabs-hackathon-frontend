import { Button, styled } from "@mui/material"

export const StyledButton = styled(Button)<{ disabled: boolean }>`
  min-width: 207px;
  height: 36px;
  font-size: 14px;
  padding: 8px 12px;
  text-transform: none;
  border-radius: 40px;
  font-weight: 500;
  background: #6a28ea;
  color: #f9f9f9;

  &:hover {
    background-color: #5817d8;
  }

  ${({ disabled }) => disabled && "background: #aaa"};
`
