// import { AppThunk } from "../store"
import { setPwaKey } from "../.."

export const updateSearchMode =
  (searchMode: string): any =>
  async (dispatch: any) => {
    try {
        // console.log("updateSearchMode", payload)
        dispatch(setPwaKey({ key: "searchMode", value: searchMode }))
    } catch (error: any) {
      console.log("Action error: updateSearchMode", error)
    }
  }
