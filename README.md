## ![alt text](./react-app/public/svg/logo16.svg "Bitcoin Hash Logo") Bitcoin Hash

Bootstrapping from my recent work, everything I need to build an app quickly is already written. Even the [Documentation](./react-app/public/markdown/)

#### Features

- Tests  
    CI, Jest, GitHub Workflows, TDD. [Read more](./react-app/public/markdown/05_tests.md)

- Highly Portable
    Copy the folder [/src/BitcoinHash/](https://github.com/listingslab/bitcoin-hash/tree/master/react-app/src/BitcoinHash) into any JS app and it _should just work_. (If all the dependencies exist)

- [Custom Design System](./react-app/public/markdown/30_design-system.md)       
    Based on several years of constant iteration, the project is bootstrapped with Material UI, listingslab custom components containing all the features I need to rapidly create a full PWA. Example: [&lt;Icon icon="rocket" /&gt;](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/src/BitcoinHash/components/Icon.tsx)

- Persistant Data 
    Instead of saving anything to a DB, we're using a [persisted Redux store with LocalStorage](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/src/BitcoinHash/redux/store.ts). This means a returning visit does not require a DB request and even better; the entire app state is saved. As a next step I would also save the redux state to a cloud based NoSQL DB at certain times for good measure

- [GraphQL](https://github.com/listingslab/bitcoin-hash/blob/feature/graphql/react-app/public/markdown/40_graphql.md)  
    Combining [Bitquery's GraphQL API](https://bitquery.io/labs/graphql) service with [@apollo/client](https://www.npmjs.com/package/@apollo/client) in React, we developed an async data layer interface which is used via [redux actions](https://github.com/listingslab/bitcoin-hash/tree/master/react-app/src/BitcoinHash/redux/actions)
