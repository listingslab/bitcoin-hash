import React from "react"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  Font,
  Icon,
} from "../"

export default function Subscribed() {
  const pwa = usePwaSelect(selectPWA)
  const{subscribed} = pwa
  return (<>
            <Box sx={{m:1}}>
              <Card>
                <CardHeader 
                  avatar={<Icon icon="subscribe" color="primary" />}
                  title={<Font variant="title">
                          Subscribed
                        </Font>}
                />
                <CardContent>
                  
                  <pre>{JSON.stringify(subscribed, null, 2)}</pre>
                </CardContent>
              </Card>
            </Box>
          </>)
}
