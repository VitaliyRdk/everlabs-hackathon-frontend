import React, { useState } from "react"
import ReactDOM from "react-dom"
import {
  ConfirmButton,
  Input,
  InputError,
  Modal,
  ModalContent,
  ModalFooter,
  ModalShadow,
  ModalSubtitle,
  ModalTitle,
} from "./styles"

export function ModalContainer({
  setOpen,
  setData,
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
}) {
  const [localData, setLocalData] = useState("")
  const [localDataError, setLocalDataError] = useState(null)
  const close = () => {
    setOpen(false)
    setLocalDataError(null)
  }
  const submit = () => {
    if (localData.length) {
      setData({ name: localData })
      close()
    } else {
      setLocalDataError("This field is required")
    }
  }
  const handleOnChange = (e) => {
    setLocalData(e.target.value)
    setLocalDataError(null)
  }

  return ReactDOM.createPortal(
    <>
      <ModalShadow onClick={close} />
      <Modal>
        <ModalTitle>{title}</ModalTitle>
        <ModalSubtitle>{subtitle}</ModalSubtitle>
        <ModalContent>
          <label>Create folder *</label>
          <Input
            value={localData}
            onChange={(e) => handleOnChange(e)}
            required
          />
          {localDataError && <InputError>{localDataError}</InputError>}
        </ModalContent>
        <ModalFooter>
          <ConfirmButton onClick={close}>{secondaryButtonText}</ConfirmButton>
          {primaryButtonText && (
            <ConfirmButton primary onClick={submit}>
              {primaryButtonText}
            </ConfirmButton>
          )}
        </ModalFooter>
      </Modal>
    </>,
    document.getElementById("app-modal"),
  )
}
