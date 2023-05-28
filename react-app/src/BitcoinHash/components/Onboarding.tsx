import React from "react"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Link,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  updateSearchMode,
  updateSearchStr,
  selectPWA,
  Font,
  Icon,
} from ".."

export default function Onboarding() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {onboarding} = pwa
  if(!onboarding) return null

  const onTestClick = (payload: any) => {
    // console.log("onTestClick", payload)
    const {searchMode, searchStr} = payload
    dispatch (updateSearchMode(searchMode))
    dispatch (updateSearchStr(searchStr))
  }

  return (<>
          <Box sx={{my:1}}>
            <Card sx={{}}>
              <CardHeader 
                title={<Font variant="giant">
                        Get started
                      </Font>}
                action={<IconButton
                  sx={{mt:-1}}
                  color="inherit"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    window.open(`https://github.com/listingslab/bitcoin-hash`, "_blank")
                }}>
                  <Icon icon="github" />
                </IconButton>}
              />
              <CardContent>
                
                <Font>
                    Search for a specific BitCoin BlockChain address or transaction. 
                    Paste hash into the search box. 
                    Or try these <Link
                            sx={{cursor: "pointer"}}
                            onClick={() => onTestClick({
                              searchMode: "address",
                              searchStr: "bc1qgyrmw4ncp2rgkatz8p8uq86pls3xpk6u9kzmc7",
                            })}>
                    Address#</Link> or <Link
                        sx={{cursor: "pointer"}}
                        onClick={() => onTestClick({
                          searchMode: "transaction",
                          searchStr: "2892bc7fb0c2efe34f655f659bffb4d694ffc33f824cb0752da5ecb2d2ff39dc",
                        })}
                      >
                      Transaction#
                    </Link>
                </Font>
                <Box sx={{my: 2}}/>
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