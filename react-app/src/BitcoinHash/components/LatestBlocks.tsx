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

const HeaderRow = () => {
  return <>
    <Card>
    HeaderRow
    </Card>
  </>
}

const BlockItem = (block: any) => {

  return <>unixtime</>
}

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
  
  if (!data) return <></>
  
  const {blocks} = data.bitcoin
  return (
    <>
      <Box sx={{m:1}}>
        <Card>
          <CardHeader 
            title={<Font variant="title">
                      Latest 20 Blocks
                    </Font>}
          />
          <CardContent>
            {loading ? <><Font>Loading...</Font></> : <>
              {blocks ? <>
                <List>
                  <HeaderRow />
                  {blocks.map((block: any, i: number) => {
                    // console.log("block", block)
                    // const {blockHash} = block
                    if (i===1) console.log("block", block)
                    return <ListItem key={`block_${i}`}>
                    {/* <pre>{JSON.stringify(block, null, 2)}</pre> */}
                    <BlockItem block={block}/>
                    </ListItem>
                  })}
                </List>
              </> : null}
              {error ? <pre>Bitquery Error: {JSON.stringify(error, null, 2)}</pre> : null}
            </>}
          </CardContent>
        </Card>
      </Box>
    </>
  )
  
}

/*
<pre>blocks: {JSON.stringify(blocks, null, 2)}</pre>
*/