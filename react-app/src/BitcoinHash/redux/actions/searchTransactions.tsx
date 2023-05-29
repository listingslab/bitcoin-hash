import { setPwaKey } from "../.."
import { useQuery, gql } from '@apollo/client';
import {client} from "../../BitcoinHash"

const GET_HASH_DATA = gql`
query ($network: BitcoinNetwork!, $limit: Int!, $hash: String) {
  bitcoin(network: $network) {
    transactions(
      options: {desc: ["block.height", "index"], limit: $limit}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      inputValue
      input_value_usd: inputValue(in: USD)
      outputCount
      inputCount
      index
      hash(
        txHash: {is: $hash}
      )
      feeValue
      fee_value_usd: feeValue(in: USD)
    }
  }
}
`

function getHashData(hash: string) {
  return client.query({
    query: GET_HASH_DATA,
    variables: {
      hash,
      "limit": 1,
      "network": "bitcoin",
      "dateFormat": "%Y-%m-%d"
    },
  });
}


export const searchTransactions = (hash: string): any =>
  async (dispatch: any) => {
    try {
      console.log("searchTransactions", hash)
      dispatch(setPwaKey({ key: "searching", value: true }))
      const data = await getHashData(hash)
      const {transactions} = data.data.bitcoin
      if (!transactions.length){
        dispatch(setPwaKey({ key: "notifyer", value: {
          severity: "warning",
          message: `No transaction found for that hash`
        }}))
      }
      // const {transactions} = data.bitcoin
      dispatch(setPwaKey({ key: "searching", value: false }))
      dispatch(setPwaKey({ key: "searchResultsT", value: transactions }))
      
        // dispatch(setPwaKey({ key: "searching", value: true }))
        
    } catch (error: any) {
      console.log("Action error: searchTransactions", error)
    }
}
