import React from "react"
// import {ThemeShape} from "../types"
import {
  usePwaSelect,
  selectPWA,
  makeTheme,
} from "../"
import {
  createTheme,
  ThemeProvider,
} from "@mui/material"

export default function MuiTheme(props: any) {
  const {children} = props
  const debug = false
  const pwa = usePwaSelect(selectPWA)
  const {theme} = pwa
  const customTheme = makeTheme(theme.mode, theme.primaryColor, theme.secondaryColor)

  return (
    <>
      <ThemeProvider theme={createTheme(customTheme)}>
        {children}
        {debug ? <pre>theme: {JSON.stringify(theme, null, 2)}</pre> : null }
      </ThemeProvider>
    </>
  )
}