import React from "react"
import pJSON from "../../package.json"
import "./theme/default.css"
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
  
  return (<>
            <WrapRedux>
              <MuiTheme>
                <Container maxWidth="md">
                  <AppShell />
                </Container>
              </MuiTheme>
            </WrapRedux>
          </>)
}


/*
const output: any = null
{output ? <pre>{JSON.stringify(output, null, 2)}</pre> : null}
*/