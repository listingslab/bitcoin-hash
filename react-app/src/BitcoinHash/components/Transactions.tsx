import React from "react"
import {
  Box,
  CardContent,
  Card,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  Search,
} from "../"

export default function Transactions() {
  const pwa = usePwaSelect(selectPWA)
  const {transactions} = pwa
  return (<>
            <Box sx={{m:1}}>
              <Card sx={{}}>
                <CardContent>
                  <Search 
                    type="transactions"
                  />
                </CardContent>
                <pre>{JSON.stringify(transactions, null, 2)}</pre>
              </Card>
            </Box>
          </>)
}
