import React from "react"
import {
  Card,
  CardContent,
} from "@mui/material"
import {
  Search,
} from ".."

export default function Addresses() {
  // const pwa = usePwaSelect(selectPWA)
  return (<>
          <Card sx={{}}>
            <CardContent>
              <Search 
                type="addresses"
              />
            </CardContent>
          </Card>
        </>)
}
