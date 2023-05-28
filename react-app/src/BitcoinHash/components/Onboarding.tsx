import React from "react"
import {
  Box,
  Card,
  CardContent,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  Font,
} from ".."

export default function Onboarding() {
  const pwa = usePwaSelect(selectPWA)

  return (<>
          <Box sx={{my:1}}>
            <Card sx={{}}>
              <CardContent>
                <Font>
                    Onboarding
                </Font>
              </CardContent>
            </Card>
          </Box>
        </>)
}

/*
<pre>{JSON.stringify(pwa, null, 2)}</pre>
*/