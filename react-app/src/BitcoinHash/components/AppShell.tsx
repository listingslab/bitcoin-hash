import React from "react"
import {
  Box,
  Avatar,
  Card,
  CardHeader,
  CardActions,
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
} from "../"

export default function AppShell() {
  const output: any = null
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
                      Search for/Subscribe to BTC blockchain hashes
                    </Font>}
                action={<>
                  <CurrencyMenu />
                </>} 
              />

            </Card>

                {output ? <pre>{JSON.stringify(output, null, 2)}</pre> : null}
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={4}>
                    <Subscribed />
                    <TopFive />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Addresses />
                    <Transactions />
                  </Grid>
                </Grid>
          
              
              <CardActions>
                  <Box sx={{flexGrow:1}} />
                  <IconButton
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      window.open(`https://github.com/listingslab/bitcoin-hash`, "_blank")
                  }}>
                    <Icon icon="github" />
                  </IconButton>
              </CardActions>
          </>)
}
