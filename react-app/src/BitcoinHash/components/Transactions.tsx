import React from "react"
import {
  Box,
  CardContent,
  Card,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
} from "../"

export default function Transactions() {
  const pwa = usePwaSelect(selectPWA)
  const {transactions} = pwa
  if (!transactions.length) return null
  return (<>
            <Box sx={{m:1}}>
              <Card sx={{}}>
                <CardContent>
                </CardContent>
                <pre>{JSON.stringify(transactions, null, 2)}</pre>
              </Card>
            </Box>
          </>)
}
