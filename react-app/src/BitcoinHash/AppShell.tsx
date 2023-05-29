import * as React from 'react'
import {
  useTheme,
  styled,
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Paper,
  Fab,
  LinearProgress,
} from "@mui/material"
import {
  Icon,
  CurrencyMenu,
  AccordionTestData,
  Search,
  Notifyer,
  usePwaSelect,
  selectPWA,
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
  

  const theme = useTheme()
  const titleColor = theme.palette.primary.main
  const pwa = usePwaSelect(selectPWA)
  const { 
    searching, 
  } = pwa

  return (<>
      <CssBaseline />
      <Paper sx={{ p: 2, mt: 2 }}>
        {searching ? <LinearProgress color="secondary"/> : 
        <Box sx={{height: 4}} /> }
        <Search />
      </Paper>
      <AccordionTestData />
      
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <StyledFab 
            color="primary"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              window.open("https://github.com/listingslab/bitcoin-hash", "_blank")
            }}>
            <Icon icon="github" />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <CurrencyMenu />
          {/* <IconButton 
            color="inherit" 
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              console.log("Search")
            }}>
            <Icon icon="menu" />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Notifyer />
    </>
  )
}
