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
  Font,
  Search,
  Notifyer,
  usePwaSelect,
  selectPWA,
  BitQuery,
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
      <Paper square sx={{ pb: '50px', mt: 2 }}>

        {searching ? <LinearProgress color="secondary"/> : 
        <Box sx={{height: 4}} /> }

        <Box sx={{ p: 2, pb: 0, mb:2 }}>
          <Font variant="title" color={titleColor}>
            Bitcoin#
          </Font>
        </Box>
        <Search />
        <BitQuery />
      </Paper>
      
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
