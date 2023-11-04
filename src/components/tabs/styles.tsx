import { styled } from "@mui/material"

export const TabsContainer = styled("div")`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  width: 100%;
  margin-bottom: 40px;
`

export const Tab = styled("div")<{ active: boolean }>`
  display: flex;
  justify-content: center;
  min-width: 130px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ active }) => (active ? "#2A2A2A" : "#8E8E8E")};
  border-bottom: ${({ active }) => (active ? "2px solid #6A28EA" : "unset")};
  padding: 16px;
  &:hover {
    color: #2a2a2a;
    cursor: pointer;
  }
`

export const CreateButton = styled("button")`
  background: unset;
  margin: 0 0 0 auto;
  width: 119px;
  height: 32px;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
  color: #6a28ea;
  border: 1px solid #6a28ea;
  border-radius: 40px;
`
