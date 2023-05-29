import { setPwaKey } from "../.."

export const searchTransactions = (hash: string): any =>
  async (dispatch: any) => {
    try {
        dispatch(setPwaKey({ key: "searching", value: true }))
        dispatch(setPwaKey({ key: "notifyer", value: {
            severity: "success",
            message: `Search transaction #${hash}`
        }}))
    } catch (error: any) {
      console.log("Action error: search", error)
    }
}
