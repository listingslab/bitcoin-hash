import { setPwaKey } from "../.."

export const search =
  (
    // searchMode: string,
    // searchStr: string,
  ): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "searching", value: true }))

      dispatch(setPwaKey({ key: "notifyer", value: {
        severity: "success",
        message: "Waiting on apollo hooks"
      } }))


      setTimeout(() => {
        dispatch(setPwaKey({ key: "searching", value: false }))
      }, 5000)
    } catch (error: any) {
      console.log("Action error: search", error)
    }
  }
