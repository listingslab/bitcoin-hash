import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import {
  KeyValueShape,
  PwaReduxShape,
} from "../types"
import {
  theme,
  currencies,
} from "../"

const initialState: PwaReduxShape = {
  started: false,
  onboarding: true,
  searching: false,
  notifyer: null,
  searchMode: "address",
  searchStr: "",
  currencies,
  selectedCurrency: "EUR",
  theme,
}

export const pwaSlice = createSlice({
  name: "pwa",
  initialState,
  reducers: {
    setPwaKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectPWA = (state: RootState) => state
export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
