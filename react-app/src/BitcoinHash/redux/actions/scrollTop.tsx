export const scrollTop = () =>
  async (/*dispatch: any*/) => {
    try {
        console.log("scrollTop")
        // dispatch(setPwaKey({ key: "currency", value: currency }))
    } catch (error: any) {
      console.log("Action error: getBitquery", error)
    }
  }
