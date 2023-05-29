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

/*
<List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
*/