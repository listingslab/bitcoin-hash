import React from "react"
import {
  Box,
  Avatar,
  CardHeader,
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
              
                <CardHeader 
                  avatar={<Avatar src="/svg/logo.svg" alt={"Bitcoin#"}/>}
                  action={<Font variant="giant" color="white">
                            Bitcoin#
                          </Font>}/>
              <Onboarding />
              <Search />
            </Box>
          </>)
}

