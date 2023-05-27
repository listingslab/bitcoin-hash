import * as React from "react"
import { useQuery, gql } from '@apollo/client';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
} from "@mui/material"
import {
  Font,
} from "../"


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

export default function LatestBlocks(): JSX.Element {
  const { loading, error, data } = useQuery(BITQUERY_QUERY)
  if (loading) return <></>

  const {blocks} = data.bitcoin
  return (
    <>
      <Box sx={{m:1}}>
        <Card>
          <CardHeader 
            title={<Font variant="title">
                      Latest Blocks
                    </Font>}
          />
          <CardContent>
            {blocks ? <>
              <List>
                {blocks.map((block: any, i: number) => {
                  // console.log("block", block)
                  // const {blockHash} = block
                  return <ListItem key={`block_${i}`}>
                  <pre>{JSON.stringify(block, null, 2)}</pre>
                  </ListItem>
                })}
              </List>
            </> : null}
              
            {loading ? <><Font>Loading...</Font></> : null}
            {error ? <pre>Bitquery Error: {JSON.stringify(error, null, 2)}</pre> : null}
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

/*
<pre>blocks: {JSON.stringify(blocks, null, 2)}</pre>
*/