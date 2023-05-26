import pJSON from "../../package.json"
import "./theme/default.css"
import React from "react"
import {
  Avatar,
  IconButton,
  CardHeader,
  Container,
  Tooltip,
} from "@mui/material"
import {
  AppShell,
  Font,
  MuiTheme,
  WrapRedux,
  CurrencyMenu,
} from "./"
console.log(pJSON.name, pJSON.version)

export default function BitcoinHash() {
  const output: any = null
  return (<>
            <WrapRedux>
              <MuiTheme>
                <Container maxWidth="lg" sx={{my:1}}>
                  
                  <AppShell />
                </Container>
                {output ? <pre>{JSON.stringify(output, null, 2)}</pre> : null}
              </MuiTheme>
            </WrapRedux>
          </>)
}
