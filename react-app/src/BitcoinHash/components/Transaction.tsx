import React from "react"
import {
  Card,
  CardContent,
} from "@mui/material"
import {
  // usePwaSelect,
  // selectPWA,
  Font,
} from ".."

export default function Transaction() {
  // const pwa = usePwaSelect(selectPWA)
  return (<>
          <Card>
            <CardContent>
              <Font variant="description">
               Single Transaction
              </Font>
            </CardContent>
          </Card>
        </>)
}
