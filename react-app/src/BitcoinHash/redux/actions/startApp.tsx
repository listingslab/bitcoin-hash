// import { AppThunk } from "../store"
import { setPwaKey } from "../../"

export const startApp =
  (): any =>
  async (dispatch: any) => {
    try {
      // console.log("startApp app")
      dispatch(setPwaKey({ key: "started", value: true }))
      dispatch(setPwaKey({ key: "persisted", value: true }))
    } catch (error: any) {
      console.log("Action error: startApp", error)
    }
  }
