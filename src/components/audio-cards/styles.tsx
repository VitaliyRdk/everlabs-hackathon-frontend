import { styled } from "@mui/material"

export const AudioCardsContainer = styled("div")`
  display: flex;
  flex-direction: column;
`

export const AudioCard = styled("div")`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid #e3e3e3;
  padding: 24px;
  margin-bottom: 8px;
`

export const AudioCardPlayAudio = styled("img")`
  margin-right: 16px;
  cursor: pointer;
`

export const AudioCardContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const AudioCardContentTitle = styled("a")`
  overflow: hidden;
  color: #6a28ea;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
  text-decoration-line: underline;
  &:hover {
    color: #380798;
  }
`

export const AudioCardContentDescription = styled("div")`
  color: #8e8e8e;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.88125rem;
`

export const AudioCardContentFolder = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2a2a2a;
  background: #f9f9f9;
  padding: 4px 8px;
`

export const AudioCardContentFolderIcon = styled("img")`
  margin-right: 8px;
`
