import React from "react"
import {
  Card,
  CardHeader,
} from "@mui/material"
import {
  Font,
} from "../"

export default function TopFive() {
  // const pwa = usePwaSelect(selectPWA)
  return (<>
            <Card sx={{}}>
              <CardHeader 
                title={<Font variant="title">
                        Top 5
                      </Font>}
                subheader={<Font>
                            Searches for Addresses & Transactions
                          </Font>}
              />
            </Card>
          </>)
}
