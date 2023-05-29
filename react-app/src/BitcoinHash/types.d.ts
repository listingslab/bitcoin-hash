import { PaletteMode, AlertColor } from "@mui/material"

export type PwaReduxShape = {
  started: boolean
  theme: ThemeShape
  notifyer: NotifyerShape|null
  searching: boolean
  searchStr: string
  searchStrT: string
  searchStrA: string
  searchResults: any
  selectedCurrency: string
  currencies: Array<CurrencyShape>
  persisted: boolean
}

export type NotifyerShape = {
  severity: AlertColor
  message: string
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

export type AddressShape = {
  thing: string
}

export type TransactionShape = {
  thing: string
}

export type TopfiveShape = {
  thing: string
}

export type SubscribedShape = {
  thing: string
}

export type SearchShape = {
  type?: string
}
