import React from "react"
import {
  Box,
  Card,
  CardContent,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
} from ".."

export default function Addresses() {
  const pwa = usePwaSelect(selectPWA)
  const {addresses} = pwa
  if (!addresses.length) return null
  return (<>
          <Box sx={{m:1}}>
            <Card sx={{}}>
              <CardContent>
                
                <pre>{JSON.stringify(addresses, null, 2)}</pre>
              </CardContent>
            </Card>
          </Box>
        </>)
}
