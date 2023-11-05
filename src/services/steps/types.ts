export type LanguageShortName = "en" | "ua" | "es"

export type GenerateAudioStepParams = {
  content: string
  language_short_name: LanguageShortName
}

export type GenerateAudioStepResponse = {
  src: string
}
