import * as React from "react"
import { useQuery, gql } from '@apollo/client';
import {client} from "../BitcoinHash"
const GET_HASH_DATA = gql`
query HashData {
  bitcoin {
    blocks(options: {limit: 10}) {
      height
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
    }
  }
}
`

function getHashData(hash: string) {
  return client.query({
    query: GET_HASH_DATA,
    variables: { hash },
  });
}

function BitQuery(): JSX.Element {
  const { loading, error, data } = useQuery(GET_HASH_DATA, {
    variables: { hash: "2892bc7fb0c2efe34f655f659bffb4d694ffc33f824cb0752da5ecb2d2ff39dc" },
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