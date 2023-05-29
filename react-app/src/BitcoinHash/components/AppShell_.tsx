import React from "react"
import {
  useTheme,
  Box,
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
  Notifyer,
} from ".."

export default function AppShell() {  

  const theme = useTheme()
  const titleColor = theme.palette.secondary.main


  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  React.useEffect(() => {
    const {started} = pwa
    if (!started) dispatch(startApp())
  }, [pwa, dispatch])

  return (<>
            <Box sx={{m:1}}>
              <CardHeader
                title={<Font variant="giant" color={titleColor}>
                        Bitcoin#
                      </Font>}/>
              
              <Search />
              <Onboarding />
              <Notifyer />
            </Box>
          </>)
}

