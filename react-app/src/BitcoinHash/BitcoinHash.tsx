import pJSON from "../../package.json"
import "./theme/default.css"
import React from "react"
import {
  Avatar,
  IconButton,
  Box,
  CardHeader,
  Container,
  Grid,
  Tooltip,
} from "@mui/material"
import {
  AppShell,
  Font,
  MuiTheme,
  WrapRedux,
  Addresses,
  Transactions,
} from "./"
console.log(pJSON.name, pJSON.version)

export default function BitcoinHash() {
  const output: any = null
  return (<>
            <WrapRedux>
              <MuiTheme>
                <Container maxWidth="lg" sx={{my:1}}>
                  <CardHeader 
                    title={<Font variant="description">
                              Bitcoin Hash
                            </Font>} 
                    avatar={<Tooltip title="Reset">
                              <IconButton
                                onClick={(e: React.MouseEvent) => {
                                  e.preventDefault()
                                  window.open(`/`, "_self")
                              }}>
                                <Avatar src="/svg/logo.svg" alt={"Bitcoin Hash"}/>
                              </IconButton>
                            </Tooltip>}
                  />
                  <AppShell />
                </Container>
                {output ? <pre>{JSON.stringify(output, null, 2)}</pre> : null}
              </MuiTheme>
            </WrapRedux>
          </>)
}
