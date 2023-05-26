import React from "react"
import {
  Box,
  Card,
  CardContent,
} from "@mui/material"
import {
  Search,
  usePwaSelect,
  selectPWA,
} from ".."

export default function Addresses() {
  const pwa = usePwaSelect(selectPWA)
  const {addresses} = pwa
  return (<>
          <Box sx={{m:1}}>
            <Card sx={{}}>
              <CardContent>
                <Search 
                  type="addresses"
                />
                <pre>{JSON.stringify(addresses, null, 2)}</pre>
              </CardContent>
            </Card>
          </Box>
        </>)
}
