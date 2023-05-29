import { setPwaKey } from "../.."

export const updateSearchStrT =
  (searchStrT: string): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "searchStrT", value: searchStrT }))
    } catch (error: any) {
      console.log("Action error: updateSearchStrT", error)
    }
  }
