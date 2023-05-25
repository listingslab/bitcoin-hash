import React from "react"
// import {
//   CardMedia,
// } from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
} from "../"

export default function LeftColLinks() {

  const pwa = usePwaSelect(selectPWA)
  return (<>
      <pre>
        {JSON.stringify(pwa, null, 2)}
      </pre>
    </>)
}
