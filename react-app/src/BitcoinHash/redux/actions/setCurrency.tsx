import { AppThunk } from "../store"
import { setPwaKey } from "../.."

export const setCurrency =
  (currency: string): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "currency", value: currency }))
    } catch (error: any) {
      console.log("Action error: setCurrency", error)
    }
  }
