import * as yup from "yup"

export const LINK_MIN_CHARACTERS = 10
export const LINK_MAX_CHARACTERS = 150

export const getLinkFieldSchema = () => {
  return yup.object().shape({
    link: yup
      .string()
      .required("Please enter a link")
      .min(LINK_MIN_CHARACTERS, "Minimum number of characters is 10")
      .max(LINK_MAX_CHARACTERS, "Maximum number of characters is 150")
      .url("Invalid URL format"),
  })
}
