import React from "react"
import {
  Box,
  // Card,
  // CardContent,
  // CardHeader,
} from "@mui/material"
import {
  // usePwaSelect,
  // selectPWA,
  // Font,
  // Address,
  Search,
} from ".."

export default function Addresses() {
  // const pwa = usePwaSelect(selectPWA)
  return (<>
          <Box>
            <Search 
              type="addresses"
            />
          </Box>
        </>)
}
