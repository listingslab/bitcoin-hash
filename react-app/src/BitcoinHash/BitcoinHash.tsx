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
  LeftColLinks,
} from "./"
console.log(pJSON.name, pJSON.version)

export default function BitcoinHash() {
  const output: any = null
  const title: string = "Bitcoin Hash"
  const description: string = "Retrieve and display address and transaction information from the BTC blockchain"
  const body: string|null = null
  const avatar: string = "/svg/logo.svg"
  const image: string|null = null // "/jpg/opengraph.jpg"

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
                                    <Avatar src={avatar} alt={description}/>
                                  </IconButton></Tooltip>}
                          title={<Font variant="description">
                                  {title}
                                </Font>}
                          subheader={<Font>
                                      {description}
                                    </Font>}          
                        />
                          <Grid container>

                            <Grid item xs={12} sm={4}>
                              <Box sx={{}}>
                                <LeftColLinks />
                              </Box>
                            </Grid>


                            <Grid item xs={12} sm={8}>
                              
                              {output ? <pre>{JSON.stringify(output, null, 2)}</pre> : null}

                              <Grid container>  
                                {image ? <Grid item xs={12}>
                                  <CardMedia 
                                    component={"img"}
                                    src={image} 
                                    height={175}
                                    alt={`${title} ${description}`}
                                  />
                                </Grid> : null }
                                {body ? <>
                                  <Grid item xs={12}>
                                    <CardContent>
                                      <Font>
                                          {body}
                                      </Font>
                                    </CardContent>
                                  </Grid>
                                </> : null }
                              </Grid>
                            </Grid>
                            
                          </Grid>                        
                        </Box>
                    </Grid>
                  </Grid>
                </Container>
              </MuiTheme>
            </WrapRedux>
          </>)
}
