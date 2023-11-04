import React from "react"

import { Typography } from "@mui/material"

import { StyledNotFound } from "./styles"

const NotFound = () => {
  return (
    <StyledNotFound>
      <Typography variant="h1">Does not exist.</Typography>
      <Typography variant="h5">
        Uh oh. Sorry, we can&apos;t find what you&apos;re looking for.
      </Typography>
    </StyledNotFound>
  )
}

export default NotFound
