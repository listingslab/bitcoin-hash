import React from "react"
import {
  Box,
  Card,
  CardContent,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  Font,
} from ".."

export default function Onboarding() {
  const pwa = usePwaSelect(selectPWA)
  const {onboarding} = pwa


  return (<>
          <Box sx={{my:1}}>
            <Card sx={{}}>
              <CardContent>
                <Font variant="giant">
                  Get started
                </Font>
                <Box sx={{my: 2}}/>
                <Font>
                    To , search for a specific BitCoin BlockChain address or transaction 
                    by pasting the hash into the search box. Or... Click one of these test ones 
                </Font>
              </CardContent>
            </Card>
          </Box>
        </>)
}

/*
<pre>{JSON.stringify(pwa, null, 2)}</pre>

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