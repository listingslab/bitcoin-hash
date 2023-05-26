import React from "react"
import {
  Box,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  Search,
} from "../"

export default function Transactions() {
  const pwa = usePwaSelect(selectPWA)
  return (<>
            <Box>
              <Search 
                type="transactions"
              />
            </Box>
          </>)
}
