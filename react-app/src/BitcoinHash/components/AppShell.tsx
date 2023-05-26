import React from "react"
import {
  Box,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Tooltip,
  IconButton,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  startApp,
  selectPWA,
  Font,
  Icon,
  CurrencyMenu,
} from "../"

export default function AppShell() {
  const output: any = null
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  React.useEffect(() => {
    const {started} = pwa
    if (!started){
      // @ts-ignore
      dispatch(startApp())
    }
  }, [pwa])

  return (<>
            <Card>

              <CardHeader 
                avatar={<Tooltip title="Reset">
                          <IconButton
                            onClick={(e: React.MouseEvent) => {
                              e.preventDefault()
                              window.open(`/`, "_self")
                          }}>
                            <Avatar src="/svg/logo.svg" alt={"Bitcoin Hash"}/>
                          </IconButton>
                        </Tooltip>}
                title={<Font variant="description">
                        Bitcoin Hash
                      </Font>}
                action={<>
                  <CurrencyMenu />
                </>} 
              />
              <CardContent>
                <Font>
                  AppShell
                </Font>
                
                {output ? <pre>{JSON.stringify(output, null, 2)}</pre> : null}
              </CardContent>
              <CardActions>
                  <Box sx={{flexGrow:1}} />
                  <IconButton
                    color="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      window.open(`https://github.com/listingslab/bitcoin-hash`, "_blank")
                  }}>
                    <Icon icon="github" />
                  </IconButton>
              </CardActions>
                
            </Card>
          </>)
}
