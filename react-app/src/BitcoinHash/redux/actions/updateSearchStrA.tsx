import { setPwaKey } from "../.."

export const updateSearchStrA =
  (searchStrA: string): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "searchStrA", value: searchStrA }))
    } catch (error: any) {
      console.log("Action error: updateSearchStrA", error)
    }
  }
