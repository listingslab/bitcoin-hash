import { AppThunk } from "../store"
// import { setPwaKey } from "../.."
import {QueryShape} from "../../types"

export const getBitquery =
  (payload: QueryShape): AppThunk =>
  async (/*dispatch: any*/) => {
    try {
        console.log("getBitquery", payload)
        // dispatch(setPwaKey({ key: "currency", value: currency }))
    } catch (error: any) {
      console.log("Action error: getBitquery", error)
    }
  }
