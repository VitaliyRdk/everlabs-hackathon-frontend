export type LanguageShortName = "en" | "ua" | "es"

export type GenerateAudioStepParams = {
  language_short_name: LanguageShortName
}

export type GenerateAudioStepResponse = {
  src: string
}
