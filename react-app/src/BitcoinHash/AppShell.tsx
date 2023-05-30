import * as React from 'react'
import {
  styled,
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Fab,
  LinearProgress,
} from "@mui/material"
import {
  Icon,
  CurrencyMenu,
  Notifyer,
  usePwaSelect,
  selectPWA,
  scrollTop,
} from "./"

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
})

export default function AppShell() {
  const pwa = usePwaSelect(selectPWA)
  const { 
    searching, 
  } = pwa

  return (<>
      <CssBaseline />
      {searching ? <LinearProgress color="secondary"/> : <Box sx={{height: 4}} /> }
      
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <StyledFab 
            color="primary"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              // window.open("https://github.com/listingslab/bitcoin-hash", "_blank")
            }}>
            <Icon icon="up" />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <CurrencyMenu />
          
        </Toolbar>
      </AppBar>
      <Notifyer />
    </>
  )
}
