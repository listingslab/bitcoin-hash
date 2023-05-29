import React from "react"
import {
  useTheme,
  Box,
  Alert,
  AlertTitle,
  Link,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  updateSearchMode,
  updateSearchStr,
  selectPWA,
  Font,
} from ".."

export default function Onboarding() {
  const pwa = usePwaSelect(selectPWA)
  const theme = useTheme()
  const linkCol = theme.palette.secondary.main
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
            <Alert severity="success">
              <AlertTitle>
                Get started
              </AlertTitle>
              <Font>
                      Search for a specific BitCoin BlockChain address or transaction. 
                      Paste hash into the search box. Or try these <Link
                              sx={{cursor: "pointer", color: linkCol}}
                              onClick={() => onTestClick({
                                searchMode: "address",
                                searchStr: "bc1qgyrmw4ncp2rgkatz8p8uq86pls3xpk6u9kzmc7",
                              })}>
                      address</Link> or <Link
                          sx={{cursor: "pointer", color: linkCol}}
                          onClick={() => onTestClick({
                            searchMode: "transaction",
                            searchStr: "2892bc7fb0c2efe34f655f659bffb4d694ffc33f824cb0752da5ecb2d2ff39dc",
                          })}
                        >
                        transaction
                      </Link>
                  </Font>
            </Alert>
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

action={<IconButton
                  sx={{mt:-1}}
                  color="inherit"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    window.open(`https://github.com/listingslab/bitcoin-hash`, "_blank")
                }}>
                  <Icon icon="github" />
                </IconButton>}

avatar={<IconButton
                              onClick={(e: React.MouseEvent) => {
                                e.preventDefault()
                                window.open(`/`, "_self")
                            }}>
                              <Avatar src="/svg/logo.svg" alt={"Bitcoin Hash"}/>
                            </IconButton>}

*/