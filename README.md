## ![alt text](./react-app/public/svg/logo16.svg "Bitcoin Hash Logo")  Bitcoin#

Bootstrapping from recent work, everything needed to build an app quickly is already written.  
Even the [Documentation](./react-app/public/markdown/)

### Code Challenge 

[Read the original challenge](./react-app/public/markdown/00_challenge.md) 
  
### [Solution](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/public/markdown/10_init-project.md)

The [demo app](https://bitcoin-hash-demo.web.app/) consists of a React/MUI interface to the bitquery GraphQL. You can look up either an 
address or a transaction by it's hash. Once a record is found, the user can subscribe to updates, 
achives with @apollo's rect hooks (hopefully)

[Docs](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/public/markdown/)



#### Install & dev

> To connect to Bitquery requires an API key, which can't be exposed in a public repo and is therefore abstracted to an `.env`. Just un-zip `/react-app/env.zip` for a cheaty workaround 

```shell
cd <working-dir>
git clone https://github.com/listingslab/bitcoin-hash
cd bitcoin-hash
unzip react-app/env.zip
npm install
npm test
# new tab
npm start
```

#### Techstack

- [Tests](./react-app/public/markdown/05_tests.md)  
    CI, Jest, GitHub Workflows, TDD. 

- [Highly Portable](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/public/markdown/10_init-project.md)  
    Copy the folder [/src/BitcoinHash/](https://github.com/listingslab/bitcoin-hash/tree/master/react-app/src/BitcoinHash) into any JS app and it _should just work_. (If all the dependencies exist)

- [Custom Design System](./react-app/public/markdown/30_design-system.md)       
    Based on several years of constant iteration, the project is bootstrapped with Material UI, listingslab custom components containing all the features I need to rapidly create a full PWA. Example: [&lt;Icon icon="rocket" /&gt;](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/src/BitcoinHash/components/Icon.tsx)

Primary Colour  
(darker)

```shell
#2b1616
```
Secondary Colour  
(lighter)

```shell
#C09F52
```
- Persistant Data 
    Instead of saving anything to a DB, we're using a [persisted Redux store with LocalStorage](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/src/BitcoinHash/redux/store.ts). This means a returning visit does not require a DB request and even better; the entire app state is saved. As a next step I would also save the redux state to a cloud based NoSQL DB at certain times for good measure

- [GraphQL](https://github.com/listingslab/bitcoin-hash/blob/feature/graphql/react-app/public/markdown/40_graphql.md)  
    Combining [Bitquery's GraphQL API](https://bitquery.io/labs/graphql) service with [@apollo/client](https://www.npmjs.com/package/@apollo/client) in React, we developed an async data layer interface which is used via [redux actions](https://github.com/listingslab/bitcoin-hash/tree/master/react-app/src/BitcoinHash/redux/actions)
