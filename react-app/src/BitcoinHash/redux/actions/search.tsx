import { setPwaKey } from "../.."

export const search =
  (
    // searchMode: string,
    // searchStr: string,
  ): any =>
  async (dispatch: any) => {
    try {
      const searchMode = ""
      const searchStr = ""
      dispatch(setPwaKey({ key: "searching", value: true }))
      if (searchMode){
        dispatch(setPwaKey({ key: "searchingStr", value: searchStr }))
      }
    } catch (error: any) {
      console.log("Action error: search", error)
    }
  }
