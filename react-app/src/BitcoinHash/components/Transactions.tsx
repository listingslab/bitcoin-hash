import React from "react"
import {
  Box,
  CardContent,
  Card,
} from "@mui/material"
import {
  // usePwaSelect,
  // selectPWA,
  Search,
} from "../"

export default function Transactions() {
  // const pwa = usePwaSelect(selectPWA)
  return (<>
            <Box sx={{m:1}}>
              <Card sx={{}}>
                <CardContent>
                  <Search 
                    type="transactions"
                  />
                </CardContent>
              </Card>
            </Box>
          </>)
}
