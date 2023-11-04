import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledNotFound = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 30px * 2)",
  [theme.breakpoints.down("md")]: {
    width: "86%",
    margin: "auto",
  },
  ".MuiTypography-h1": {
    textAlign: "center",
    marginBottom: "16px",
  },
  ".MuiTypography-h5": {
    width: "84%",
    textAlign: "center",
    fontWeight: "400",
    fontSize: "22px",
  },
}))
