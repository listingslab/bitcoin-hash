import React from "react"
import {
  Box,
  Card,
  CardHeader,
} from "@mui/material"
import {
  Font,
  usePwaSelect,
  selectPWA,
} from "../"

export default function TopFive() {
  const pwa = usePwaSelect(selectPWA)
  const {topfive} = pwa
  if (!topfive.length) return null
  return (<>
            <Box sx={{m:1}}>
              <Card sx={{}}>
                <CardHeader 
                  title={<Font variant="title">
                          Top 5 Searches
                        </Font>}
                  subheader={<Font>
                              Addresses & Transactions
                            </Font>}
                />
                <pre>{JSON.stringify(topfive, null, 2)}</pre>
              </Card>
            </Box>
          </>)
}
