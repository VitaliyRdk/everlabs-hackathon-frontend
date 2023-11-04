import React from "react"

declare module "@mui/material/styles" {
  interface TypographyVariants {
    textWithUnderline: React.CSSProperties
    subtitleBig: React.CSSProperties
    subtitleMiddle: React.CSSProperties
    subTitleSmall: React.CSSProperties
    body1Regular: React.CSSProperties
    body1Medium: React.CSSProperties
    body1SemiBold: React.CSSProperties
    body1Bold: React.CSSProperties
    body2Regular: React.CSSProperties
    body2Medium: React.CSSProperties
    body2SemiBold: React.CSSProperties
    body3Regular: React.CSSProperties
    buttonSmall: React.CSSProperties
    buttonBig: React.CSSProperties
    captionSmall: React.CSSProperties
    captionMiddle: React.CSSProperties
    captionBig: React.CSSProperties
    tagBig: React.CSSProperties
    tagSmall: React.CSSProperties
  }

  export interface Palette {
    teal: Palette["primary"]
    yellow: Palette["primary"]
    red: Palette["primary"]
    blue: Palette["primary"]
    in_progress: Palette["primary"]
    requested: Palette["primary"]
    paused: Palette["primary"]
    draft: Palette["primary"]
    closed: Palette["primary"]
    awaiting: Palette["primary"]
    processing: Palette["primary"]
    working: Palette["Palette"]
    revisions: Palette["primary"]
    awaiting_action: Palette["primary"]
    done: Palette["primary"]
    hold: Palette["primary"]
    killed: Palette["primary"]
    zircon: Palette["primary"]
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    textWithUnderline?: React.CSSProperties
    subtitleBig?: React.CSSProperties
    subtitleMiddle?: React.CSSProperties
    subTitleSmall?: React.CSSProperties
    body1Regular?: React.CSSProperties
    body1Medium?: React.CSSProperties
    body1SemiBold?: React.CSSProperties
    body1Bold?: React.CSSProperties
    body2Regular?: React.CSSProperties
    body2Medium?: React.CSSProperties
    body2SemiBold?: React.CSSProperties
    body3Regular?: React.CSSProperties
    buttonSmall?: React.CSSProperties
    buttonBig?: React.CSSProperties
    captionSmall?: React.CSSProperties
    captionMiddle?: React.CSSProperties
    captionBig?: React.CSSProperties
    tagBig?: React.CSSProperties
    tagSmall?: React.CSSProperties
  }

  interface PaletteOptions {
    teal: PaletteOptions["primary"]
    yellow: PaletteOptions["primary"]
    red: PaletteOptions["primary"]
    blue: PaletteOptions["primary"]
    in_progress: PaletteOptions["primary"]
    requested: PaletteOptions["primary"]
    paused: PaletteOptions["primary"]
    draft: PaletteOptions["primary"]
    closed: PaletteOptions["primary"]
    awaiting: PaletteOptions["primary"]
    processing: PaletteOptions["primary"]
    working: PaletteOptions["Palette"]
    revisions: PaletteOptions["primary"]
    awaiting_action: PaletteOptions["primary"]
    done: PaletteOptions["primary"]
    hold: PaletteOptions["primary"]
    killed: PaletteOptions["primary"]
    zircon: PaletteOptions["primary"]
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    textWithUnderline: true
    subtitleBig: true
    subtitleMiddle: true
    subtitleSmall: true
    body1Regular: true
    body1Medium: true
    body1SemiBold: true
    body1Bold: true
    body2Regular: true
    body2Medium: true
    body2SemiBold: true
    body3Regular: true
    buttonSmall: true
    buttonBig: true
    captionSmall: true
    captionMiddle: true
    captionBig: true
    tagBig: true
    tagSmall: true
  }
}
