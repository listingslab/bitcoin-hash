import { setPwaKey } from "../.."

export const searchAddresses = (hash: string): any =>
  async (dispatch: any) => {
    try {
        dispatch(setPwaKey({ key: "searching", value: true }))
        dispatch(setPwaKey({ key: "notifyer", value: {
            severity: "success",
            message: `Search address #${hash}`
        }}))
    } catch (error: any) {
      console.log("Action error: searchAddresses", error)
    }
}
