import * as React from "react"
import { useQuery, gql } from '@apollo/client';

const BITQUERY_QUERY = gql`
query BitcoinHash {
  bitcoin {
    blocks(options: {limit: 25, desc: "height"}) {
      height
      blockHash
      transactionCount
      timestamp {
        unixtime
      }
    }
  }
}
`;

function BitQuery(): JSX.Element {
  const { loading, error, data } = useQuery(BITQUERY_QUERY);

  if (loading) return <>Loading...</>;
  if (error) return <>Error: {error.message}</>;

  return (
    <>
      <div>
        <h2>Bitquery GraphQL</h2> 
        {data ? <pre>data: {JSON.stringify(data, null, 2)}</pre> : null}
        {error ? <pre>error: {JSON.stringify(error, null, 2)}</pre> : null}
      </div>
    </>
  )
}

export default BitQuery