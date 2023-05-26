import pJSON from "../../package.json"
import "./theme/default.css"
import React from "react"
import {
  Avatar,
  IconButton,
  Box,
  CardHeader,
  CardContent,
  Container,
  CardMedia,
  Grid,
  Tooltip,
} from "@mui/material"
import {
  Font,
  MuiTheme,
  WrapRedux,
  Addresses,
  Transactions,
} from "./"
console.log(pJSON.name, pJSON.version)

export default function BitcoinHash() {
  const output: any = null
  const title: string = "Bitcoin Hash"
  const avatar: string = "/svg/logo.svg"

  return (<>
            <WrapRedux>
              <MuiTheme>
                <Container maxWidth="lg" sx={{my:1}}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Box>
                        <CardHeader 
                          avatar={<Tooltip title="Restart"><IconButton
                                    onClick={(e: React.MouseEvent) => {
                                      e.preventDefault()
                                      window.open(`/`, "_self")
                                  }}>
                                    <Avatar src={avatar} alt={title}/>
                                  </IconButton></Tooltip>}
                          title={<Font variant="description">
                                  {title}
                                </Font>}      
                        />
                          <Grid container>

                            <Grid item xs={12} sm={6}>
                              <Box sx={{}}>
                                <Addresses />
                              </Box>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <Box sx={{}}>
                                <Transactions />
                              </Box>
                            </Grid>

                          </Grid>                        
                        </Box>
                    </Grid>
                  </Grid>
                </Container>
                {output ? <pre>{JSON.stringify(output, null, 2)}</pre> : null}
              </MuiTheme>
            </WrapRedux>
          </>)
}
