import React from "react"
import {
  Box,
  Card,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  startApp,
  selectPWA,
} from "../"

export default function AppShell() {
  
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  React.useEffect(() => {
    const {started} = pwa
    if (!started){
      // @ts-ignore
      dispatch(startApp())
    }
  }, [pwa])

  return (<>
            <Card>
                AppShell
                <pre>{JSON.stringify(pwa, null, 2)}</pre>
            </Card>
          </>)
}
