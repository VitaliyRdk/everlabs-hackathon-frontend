import { Palette } from "@mui/material/styles/createPalette"
import createTypography, {
  TypographyOptions,
  TypographyStyleOptions,
} from "@mui/material/styles/createTypography"
import { Property } from "csstype"

import { defaultPalette } from "./palette"

export const BASE_FONT_FAMILY = "'Poppins', sans-serif"
const DEFAULT_LINE_HEIGHT = 1.2
const HTML_FONT_SIZE = 16
const DEFAULT_LETTER_SPACING = "normal"

const baseFontFamily = {
  fontFamily: BASE_FONT_FAMILY,
}

/**
 * WT - Return type for `wrapTypography` function;
 */

type WT = (options?: TypographyStyleOptions) => TypographyStyleOptions

const wrapTypography = (
  fontWeight: Property.FontWeight,
  fontSize: Property.FontSize<number> = HTML_FONT_SIZE,
  lineHeight: Property.LineHeight = DEFAULT_LINE_HEIGHT,
  letterSpacing: Property.LetterSpacing = DEFAULT_LETTER_SPACING,
  // eslint-disable-next-line arrow-body-style
): WT => {
  return (options): TypographyStyleOptions => ({
    ...baseFontFamily,
    ...(options || {}),
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
  })
}

const h1 = wrapTypography(800, 44, 1.136, "-2px")
const h2 = wrapTypography(800, 28, 1.07, "-1px")
const h3 = wrapTypography(600, 26, 0.92, "-0.015em")
const h4 = wrapTypography(800, 22, 1.45, "-0.01em")
const h5 = wrapTypography(600, 18, 1.33, "-0.3px")
const h6 = wrapTypography(600, 14, 1.07)
const subtitleBig = wrapTypography(600, 20, 1.56)
const subtitleMiddle = wrapTypography(500, 18, 1.56)
const subtitleSmall = wrapTypography(400, 14, 1.57)
const body1Bold = wrapTypography(700, 16, 1.5)
const body1SemiBold = wrapTypography(600, 16, 1.5)
const body1Medium = wrapTypography(500, 16, 1.5)
const body1Regular = wrapTypography(400, 16, 1.5)
const body2SemiBold = wrapTypography(600, 14, 1.71)
const body2Medium = wrapTypography(500, 14, 1.71)
const body2Regular = wrapTypography(400, 14, 1.71)
const body3Regular = wrapTypography(400, 12, 1.67)
const captionBig = wrapTypography(500, 14, 1.5)
const captionMiddle = wrapTypography(500, 12, 1.33)
const captionSmall = wrapTypography(500, 10, 1.6)
const buttonBig = wrapTypography(600, 16, 2.25)
const buttonSmall = wrapTypography(600, 14, 1.55)
const tagBig = wrapTypography(600, 12, 2)
const tagSmall = wrapTypography(700, 10, 1.2)
const overline = wrapTypography(500, 12)

const config: (palette: Palette) => TypographyOptions = (palette) => ({
  ...baseFontFamily,
  htmlFontSize: HTML_FONT_SIZE,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: h1({ color: palette.primary.main }),
  h2: h2({ color: palette.primary.main }),
  h3: h3({ color: palette.primary.main }),
  h4: h4({ color: palette.primary.main, textTransform: "initial" }),
  h5: h5({ color: palette.primary.main, textTransform: "initial" }),
  h6: h6({}),
  subtitleBig: subtitleBig({ color: palette.primary.main }),
  subtitleMiddle: subtitleMiddle({ color: palette.primary.main }),
  subtitleSmall: subtitleSmall({ color: palette.primary.main }),
  body1Bold: body1Bold({ color: palette.primary.main }),
  body1SemiBold: body1SemiBold({ color: palette.primary.main }),
  body1Medium: body1Medium({ color: palette.primary.main }),
  body1Regular: body1Regular({ color: palette.primary.main }),
  body2SemiBold: body2SemiBold({ color: palette.primary.main }),
  body2Medium: body2Medium({ color: palette.primary.main }),
  body2Regular: body2Regular({ color: palette.primary.main }),
  body3Regular: body3Regular({ color: palette.primary.main }),
  captionBig: captionBig({ color: palette.primary.main }),
  captionMiddle: captionMiddle({ color: palette.primary.main }),
  captionSmall: captionSmall({ color: palette.primary.main }),
  buttonBig: buttonBig({ color: palette.primary.main }),
  buttonSmall: buttonSmall({ color: palette.primary.main }),
  tagBig: tagBig({ color: palette.primary.main }),
  tagSmall: tagSmall({ color: palette.primary.main }),
  overline: overline({
    color: palette.primary.main,
    textTransform: "uppercase",
  }),
  textWithUnderline: {
    color: palette.primary.main,
    borderBottom: `1px solid ${palette.common.black}`,
  },
})

export const defaultTypography = createTypography(defaultPalette, config)
