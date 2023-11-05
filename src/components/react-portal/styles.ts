import { styled } from "@mui/material"

export const Modal = styled("div")`
  max-width: 600px;
  position: fixed;
  top: 75px;
  z-index: 5;
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  padding: 32px 48px;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
`

export const ModalContent = styled("div")`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  color: #2a2a2a;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem;
`

export const ModalFooter = styled("div")`
  display: flex;
  justify-content: flex-end;
`

export const ConfirmButton = styled("button")<{ primary?: boolean }>`
  background: ${({ primary }) => (primary ? "#6A28EA" : "unset")};
  color: ${({ primary }) => (primary ? "#fff" : "#6a28ea")};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
  border: 1px solid #6a28ea;
  border-radius: 40px;
  cursor: pointer;
  margin-left: 1rem;
  padding: 9px 20.5px;
`

export const ModalShadow = styled("div")`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: #eee;
  opacity: 0.7;
  z-index: 4;
`

export const ModalTitle = styled("div")`
  color: #2a2a2a;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.5625rem;
  margin-bottom: 0.5rem;
`

export const ModalSubtitle = styled("div")`
  align-self: stretch;
  color: #2a2a2a;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
  margin-bottom: 32px;
`

export const Input = styled("input")`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #e3e3e3;
  margin-top: 0.25rem;
`

export const InputError = styled("span")`
  margin-top: 7px;
  color: #f96467;
`
