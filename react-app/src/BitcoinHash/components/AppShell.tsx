import React from "react"
import {
  Box,
  Card,
  CardHeader,
  Grid,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  startApp,
  selectPWA,
  Font,
  Search,
  Onboarding,
} from "../"

export default function AppShell() {  
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  React.useEffect(() => {
    const {started} = pwa
    // @ts-ignore
    if (!started) dispatch(startApp())
  }, [pwa, dispatch])

  return (<>
            <Box sx={{m:1}}>
              <Card>
                <CardHeader 
                  title={<Font variant="giant">
                          Bitcoin#
                        </Font>}
                />
                <Grid container>
                  <Grid item xs={12}>
                    <Search />
                  </Grid>
                </Grid>
              </Card>
              <Onboarding />
            </Box>
          </>)
}

/*
const output: any = null
{output ? <pre>{JSON.stringify(output, null, 2)}</pre> : null}
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

avatar={<IconButton
                              onClick={(e: React.MouseEvent) => {
                                e.preventDefault()
                                window.open(`/`, "_self")
                            }}>
                              <Avatar src="/svg/logo.svg" alt={"Bitcoin Hash"}/>
                            </IconButton>}

*/