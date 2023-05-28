import { PaletteMode } from "@mui/material"

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

export type PwaReduxShape = {
  started: boolean
  onboarding: boolean
  persisted?: boolean
  theme: ThemeShape
  selectedCurrency: string
  currencies: Array<CurrencyShape>
  addresses: Array<AddressShape>
  transactions: Array<TransactionShape>
  subscribed: Array<SubscribedShape>
  topfive: Array<TopfiveShape>
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
