import { setPwaKey } from "../.."

export const cancelSearch =
  (): any =>
  async (dispatch: any) => {
    try {
      // dispatch(setPwaKey({ key: "searching", value: false }))
      // dispatch(setPwaKey({ key: "searchingStr", value: "" }))
    } catch (error: any) {
      console.log("Action error: cancelSearch", error)
    }
  }
