import { setPwaKey } from "../.."

export const search =
  (
    // searchMode: string,
    // searchStr: string,
  ): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "searching", value: true }))
      setTimeout(() => {
        dispatch(setPwaKey({ key: "searching", value: false }))
        dispatch(setPwaKey({ key: "notifyer", value: {
          severity: "success",
          message: "Waiting on apollo hooks"
        } }))
      }, 1000)
    } catch (error: any) {
      console.log("Action error: search", error)
    }
  }
