import { MenuItem, Select, styled } from "@mui/material"

export const StyledSelect = styled(Select)`
  width: 150px;
  border-radius: 40px;
  background: #f9f9f9;
  text-overflow: ellipsis;
  font-size: 14px;

  .MuiSelect-select {
    padding: 8px 12px;
  }

  fieldset {
    border-width: 1px !important;
    border-color: #e3e3e3 !important;
  }
`

export const StyledSelectItem = styled(MenuItem)<{ selected: boolean }>`
  font-size: 14px;
  font-weight: 500;

  &.Mui-selected {
    background-color: ${({ selected }) =>
      selected ? "rgba(106, 40, 234, 0.10)" : "#FFF"} !important;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`
