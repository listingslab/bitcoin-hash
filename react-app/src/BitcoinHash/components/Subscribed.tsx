import React from "react"
import {
  Box,
  Card,
  CardContent,
} from "@mui/material"
import {
  // usePwaSelect,
  // selectPWA,
  Font,
} from "../"

export default function Subscribed() {
  // const pwa = usePwaSelect(selectPWA)
  return (<>
            <Box sx={{m:1}}>
              <Card>
                <CardContent>
                  <Font variant="title">
                    Subscribed
                  </Font>
                </CardContent>
              </Card>
            </Box>
          </>)
}
