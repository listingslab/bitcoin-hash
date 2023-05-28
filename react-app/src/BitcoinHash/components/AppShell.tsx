import React from "react"
import {
  Box,
  Card,
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
              <Card>
                <CardHeader 
                  title={<Font variant="giant">
                            Bitcoin#
                          </Font>}/>
              </Card>
              <Onboarding />
              <Search />
            </Box>
          </>)
}

