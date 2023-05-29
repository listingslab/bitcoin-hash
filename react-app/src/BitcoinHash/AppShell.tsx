import * as React from 'react'
import {
  useTheme,
  styled,
  CssBaseline,
  Box,
  Avatar,
  AppBar,
  Toolbar,
  Paper,
  Fab,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  Search,
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

  return (<>
      <CssBaseline />
      <Paper square sx={{ pb: '50px', mt: 2 }}>
        <Box sx={{ p: 2, pb: 0, mb:2 }}>
          <Font variant="giant" color={titleColor}>
            Bitcoin#
          </Font>
        </Box>
        <Search />
      </Paper>
      
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          
          <StyledFab 
            color="primary"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              window.open("https://github.com/listingslab/bitcoin-hash/tree/master/react-app/public/markdown", "_blank")
            }}>
            <Avatar src="/svg/logo.svg" />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          
          <IconButton 
            color="inherit" 
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              console.log("Search")
            }}>
            <Icon icon="search" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
