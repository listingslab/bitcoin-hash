## ![alt text](./react-app/public/svg/logo16.svg "Bitcoin Hash Logo") Bitcoin Hash

[Supporting Documentation](./react-app/public/markdown/)

#### Features

- Portable architecture  
    If the deps exist, you can copy the folder [/src/BitcoinHash/](https://github.com/listingslab/bitcoin-hash/tree/master/react-app/src/BitcoinHash) into any JS app and it _should just work_

- Material UI Design System with listingslab custom components      
    Based on several years of constant iteration, the project is bootstrapped with all the features we need in easy to use patterns. Example: [&lt;Icon icon="rocket" /&gt;](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/src/BitcoinHash/components/Icon.tsx)

- Persisted Redux store  
    Instead of saving anything to a DB, we're using a [persisted Redux store with LocalStorage](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/src/BitcoinHash/redux/store.ts). This means a returning visit does not require a DB request and even better, the entire redux state is saved. As a next step I would probably also save the redux state to a cloud based NoSQL DB

    https://github.com/listingslab/bitcoin-hash/blob/master/react-app/src/BitcoinHash/redux/store.ts