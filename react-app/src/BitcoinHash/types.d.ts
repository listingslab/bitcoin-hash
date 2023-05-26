import { PaletteMode } from "@mui/material"

export type SearchShape = {
  type: string
}

export type LocaleShape = {
  code: string
  displayName: string
  localName: string
  flag: string
}

export type PwaReduxShape = {
  started: boolean
  persisted?: boolean
  theme: ThemeShape
  currency: string
}

export type GatsbyShape = {
  siteUrl: string
  siteIcon: string
  siteTitle: string
  siteDescription: string
  siteKeywords: string
  siteImage: string
  siteTwitter: string
  siteTheme: string
}

export type ThemeShape = {
  title: string
  description?: string
  primaryColor: string
  secondaryColor: string
  font: string
  mode: PaletteMode
}

export type ImageSizeShape = {
  width: number
  height: number
}

export interface KeyValueShape {
  key: string
  value: any
}
