import { PaletteMode } from "@mui/material"

export type PwaReduxShape = {
  started: boolean
  persisted?: boolean
  theme: ThemeShape
  currency: CurrencyShape
}

export type QueryShape = {
  type?: string
}

export type SearchShape = {
  type?: string
}

export type CurrencyShape = {
  code: string
  name: string
  icon: string
}

export type ThemeShape = {
  title: string
  primaryColor: string
  secondaryColor: string
  font: string
  mode: PaletteMode
}

export interface KeyValueShape {
  key: string
  value: any
}
