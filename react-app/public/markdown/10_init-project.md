## ![alt text](../svg/logo16.svg "Bitcoin Hash Logo")  Initialise project

 Public GitHub repo with CI workflow and a live demo on firebase

- [Git Repo](https://github.com/listingslab/bitcoin-hash)
- [Firebase Demo](https://bitcoin-hash-demo.web.app)
- [Setup Tests](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/src/BitcoinHash/BitcoinHash.test.tsx)
- [Docs](https://github.com/listingslab/bitcoin-hash/tree/master/react-app/public/markdown)

#### Install in another project

This command will install the deps in your-project. It doesn't matter if you already have them 

```shell
cd <your-project>
npm install @apollo/client graphql react-redux @reduxjs/toolkit redux-persist @mui/material @emotion/react @emotion/styled @mui/icons-material moment
```

#### Create React App

Whatever code I write from this here should be modular enough to pick up and place in any JavaScript App. That's done by creating a folder called `/src/BitcoinHash` in which all bitcoin-hash code lives

The goal is that so long as the required dependencies exist in the main project, the Bitcoin Hash model/app/whatever should work anywhere. Like Storybook

`npx create-react-app react-app --template redux-typescript`


