import React from "react"
import {
  Box,
  Avatar,
  Card,
  CardHeader,
  IconButton,
  Grid,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  startApp,
  selectPWA,
  Font,
  Icon,
  CurrencyMenu,
  Addresses,
  Transactions,
  Subscribed,
  TopFive,
  TopSearches,
} from "../"

export default function AppShell() {
  
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  React.useEffect(() => {
    const {started} = pwa
    if (!started){
      // @ts-ignore
      dispatch(startApp())
    }
  }, [pwa, dispatch])

  return (<>
            <Box sx={{m:1}}>
              <Card>
                <CardHeader 
                  avatar={<IconButton
                              onClick={(e: React.MouseEvent) => {
                                e.preventDefault()
                                window.open(`/`, "_self")
                            }}>
                              <Avatar src="/svg/logo.svg" alt={"Bitcoin Hash"}/>
                            </IconButton>}
                  title={<Font variant="title">
                          Bitcoin Hash
                        </Font>}
                  subheader={<Font>
                        Search/Subscribe BTC blockchain hashes
                      </Font>}
                  action={<>
                    <Box sx={{display:"flex"}}>
                        <Box sx={{flexGrow:1}} />
                        <IconButton
                          sx={{mt:-1}}
                          onClick={(e: React.MouseEvent) => {
                            e.preventDefault()
                            window.open(`https://github.com/listingslab/bitcoin-hash`, "_blank")
                        }}>
                          <Icon icon="github" />
                        </IconButton>
                        <CurrencyMenu />
                    </Box>
                  </>} 
                />
              </Card>
            </Box>
                
            <Grid container sx={{mt:-1}}>
              <Grid item xs={12} sm={4}>
                <TopSearches />
                <Subscribed />
                <TopFive />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Addresses />
                <Transactions />
              </Grid>
            </Grid>
          
          </>)
}

/*
const output: any = null
{output ? <pre>{JSON.stringify(output, null, 2)}</pre> : null}
*/