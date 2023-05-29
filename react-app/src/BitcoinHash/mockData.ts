import {
    AddressShape,
    TransactionShape,
    SubscribedShape,
    TopfiveShape,
} from "./types"

export const addresses: Array<AddressShape> = []
export const transactions: Array<TransactionShape> = []
export const subscribed: Array<SubscribedShape> = []
export const topfive: Array<TopfiveShape> = []

/*
## Bitcoin Mainnet transaction hash examples
`bitcoin/address/bc1qgyrmw4ncp2rgkatz8p8uq86pls3xpk6u9kzmc7`
https://explorer.bitquery.io/bitcoin/tx/2892bc7fb0c2efe34f655f659bffb4d694ffc33f824cb0752da5ecb2d2ff39dc
`bitcoin/tx/2892bc7fb0c2efe34f655f659bffb4d694ffc33f824cb0752da5ecb2d2ff39dc`

*/