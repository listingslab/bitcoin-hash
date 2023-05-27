import { AppThunk } from "../store"
import { setPwaKey } from "../../"

export const startApp =
  (): AppThunk =>
  async (dispatch: any) => {
    try {
      // console.log("startApp app")
      dispatch(setPwaKey({ key: "started", value: true }))
      
    } catch (error: any) {
      console.log("Action error: startApp", error)
    }
  }
