import { setPwaKey } from "../.."
// import {cancelSearch} from "../../"

export const updateSearchStr =
  (searchStr: string): any =>
  async (dispatch: any) => {
    try {
      // console.log("updateSearchStr searchStr", searchStr)
      // dispatch(cancelSearch())
      dispatch(setPwaKey({ key: "searchStr", value: searchStr }))
    } catch (error: any) {
      console.log("Action error: updateSearchStr", error)
    }
  }
