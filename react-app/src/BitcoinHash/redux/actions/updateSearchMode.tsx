// import { AppThunk } from "../store"
import { setPwaKey } from "../.."
// import {cancelSearch} from "../../"

export const updateSearchMode =
  (searchMode: string): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "searchMode", value: searchMode }))
      // dispatch(cancelSearch())
    } catch (error: any) {
      console.log("Action error: updateSearchMode", error)
    }
  }
