import pJSON from "../../package.json"
import "./theme/default.css"
import React from "react"
import {
  Container,
} from "@mui/material"
import {
  AppShell,
  MuiTheme,
  WrapRedux,
} from "./"
console.log(pJSON.name, pJSON.version)

export default function BitcoinHash() {
  const output: any = null
  return (<>
            <WrapRedux>
              <MuiTheme>
                <Container maxWidth="md" sx={{my:1}}>
                  <AppShell />
                </Container>
                {output ? <pre>{JSON.stringify(output, null, 2)}</pre> : null}
              </MuiTheme>
            </WrapRedux>
          </>)
}
