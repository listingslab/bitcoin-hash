import React from "react"
import {
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
            <Card sx={{}}>
              <CardContent>
                <Search 
                  type="transactions"
                />
              </CardContent>
            </Card>
          </>)
}
