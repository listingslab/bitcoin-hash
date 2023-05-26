import React from "react"
import {
  Box,
  Card,
  CardHeader,
} from "@mui/material"
import {
  Font,
} from "../"

export default function TopFive() {
  // const pwa = usePwaSelect(selectPWA)
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
              </Card>
            </Box>
          </>)
}
