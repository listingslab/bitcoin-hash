import * as React from "react"
import { useQuery, gql } from '@apollo/client';
// import {client} from "../BitcoinHash"

const GET_HASH_DATA = gql`
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
      hash(
        txHash: {is: "2892bc7fb0c2efe34f655f659bffb4d694ffc33f824cb0752da5ecb2d2ff39dc"}
      )
      feeValue
      fee_value_usd: feeValue(in: USD)
    }
  }
}


`

// function getHashData(hash: string) {
//   return client.query({
//     query: GET_HASH_DATA,
//     variables: {
//       "limit": 1,
//       "offset": 0,
//       "network": "bitcoin",
//       "from": "2023-05-22",
//       "till": "2023-05-29T23:59:59",
//       "dateFormat": "%Y-%m-%d"
//     },
//   });
// }

function BitQuery(): JSX.Element {
  const { loading, error, data } = useQuery(GET_HASH_DATA, {
    //variables: { hash: "2892bc7fb0c2efe34f655f659bffb4d694ffc33f824cb0752da5ecb2d2ff39dc" },
    variables: {
      "limit": 1,
      "offset": 0,
      "network": "bitcoin",
      "from": "2023-05-22",
      "till": "2023-05-29T23:59:59",
      "dateFormat": "%Y-%m-%d"
    },
  })
  if (loading) return <>Loading...</>
  if (error) return <>Error: {error.message}</>

  return (
    <>
      <div>
        <h2>Bitquery Data</h2> 
        {data ? <pre>data: {JSON.stringify(data, null, 2)}</pre> : null}
        {error ? <pre>error: {JSON.stringify(error, null, 2)}</pre> : null}
      </div>
    </>
  )
}

export default BitQuery