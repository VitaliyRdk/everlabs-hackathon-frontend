import { alpha, createTheme } from "@mui/material"

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "#000000",
          padding: "6px 12px",
        },
        arrow: {
          "&:before": {
            border: `1px solid #000000`,
          },
          color: "#000000",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          scrollbarColor: `grey transparent`,
          scrollMarginTop: "60px",
        },
        body: {
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "transparent",
            width: "6px",
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: "6px",
            background: alpha("#808080", 0.75),
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              background: alpha("#808080", 0.75),
              width: "6px",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              background: alpha("#808080", 0.75),
              width: "6px",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              background: alpha("#808080", 0.75),
              width: "6px",
            },
          ".cdx-notifies": {
            zIndex: "2000",
          },
        },
      },
    },
  },
})
