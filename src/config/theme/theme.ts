import { alpha, createTheme } from "@mui/material"

import { defaultPalette } from "./palette"
import { defaultTypography } from "./typography"

const theme = createTheme({
  palette: defaultPalette,
  typography: defaultTypography,
  spacing: 2,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 992,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitleBig: "p",
          subtitleMiddle: "p",
          subtitleSmall: "p",
          body1Regular: "p",
          body1Medium: "p",
          body1SemiBold: "p",
          body1Bold: "p",
          body2Regular: "p",
          body2Medium: "p",
          body2SemiBold: "p",
          body3Regular: "p",
          buttonSmall: "span",
          buttonBig: "span",
          captionSmall: "span",
          captionMiddle: "span",
          captionBig: "span",
          tagBig: "span",
          tagSmall: "span",
        },
      },
    },
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
          background: defaultPalette.common.black,
          padding: "6px 12px",
        },
        arrow: {
          "&:before": {
            border: `1px solid ${defaultPalette.common.black}`,
          },
          color: defaultPalette.common.black,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          scrollbarColor: `${defaultPalette.grey["500"]} transparent`,
          scrollMarginTop: "60px",
          // scrollBehavior: 'inherit',
        },

        body: {
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "transparent",
            width: "6px",
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: "6px",
            background: alpha(defaultPalette.grey["400"], 0.75),
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              background: alpha(defaultPalette.grey["400"], 0.75),
              width: "6px",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              background: alpha(defaultPalette.grey["500"], 0.75),
              width: "6px",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              background: alpha(defaultPalette.grey["600"], 0.75),
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

export default theme
