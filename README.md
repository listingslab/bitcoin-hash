## ![alt text](./react-app/public/svg/logo16.svg "Bitcoin Hash Logo") Bitcoin Hash

[Docs](./react-app/public/markdown/)

#### Features

- Highly portable architecture.  
    If the deps exist, you can copy the folder [/src/BitcoinHash/](https://github.com/listingslab/bitcoin-hash/tree/master/react-app/src/BitcoinHash) into any JS app and it __should just work__

- Full Design System with Material UI and listingslab custom components
    Based on several years of constant iteration, the project is bootstrapped with all the features we need in easy to use patterns

- A persisted Redux store  
    Instead of saving anything to a DB, we're using a Redux store which is persisted for the user with LocalStorage. This means a returning visit does not require a DB request and even better, the entire redux state is saved. As a next step I would probably also save the redux state to a cloud based NoSQL DB