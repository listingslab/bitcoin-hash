import {TransactionShape} from "../../types"
import { setPwaKey } from "../.."
import { gql } from '@apollo/client';
import {client} from "../../BitcoinHash"

const GET_TRANSACTIONS = gql`
query ($network: BitcoinNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  bitcoin(network: $network) {
    transactions(
      options: {desc: ["block.height", "index"], limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
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
      hash
      feeValue
      fee_value_usd: feeValue(in: USD)
    }
  }
}
`

function getTransactionData() {
  return client.query({
    query: GET_TRANSACTIONS,
    variables: {
      "limit": 50,
      "offset": 0,
      "network": "bitcoin",
      "from": "2023-05-23",
      "till": "2023-05-30T23:59:59",
      "dateFormat": "%Y-%m-%d"
    },
  });
}

export const getTransactions = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "searching", value: true }))
      const data = await getTransactionData()
      const {transactions} = data.data.bitcoin
      let t: Array<TransactionShape> = []
      if (transactions.length){
        
        for (let i=0; i<transactions.length; i++){
          if(i === 1){
            console.log("transactions[i]", transactions[i])
          }
        }
      } else {
        dispatch(setPwaKey({ key: "notifyer", value: {
          severity: "error",
          message: `Bitquery GrpahQL API Error`
        }}))
      }

      dispatch(setPwaKey({ key: "searching", value: false }))
      dispatch(setPwaKey({ key: "transactions", value: transactions }))        
    } catch (error: any) {
      console.log("Action error: getTransactions", error)
    }
}
