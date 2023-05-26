import React from "react"
import {
  Box,
  Card,
  CardContent,
} from "@mui/material"
import {
  Search,
} from ".."

export default function Addresses() {
  // const pwa = usePwaSelect(selectPWA)
  return (<>
          <Box sx={{m:1}}>
            <Card sx={{}}>
              <CardContent>
                <Search 
                  type="addresses"
                />
              </CardContent>
            </Card>
          </Box>
        </>)
}
