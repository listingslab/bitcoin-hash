#### Step 1 
## Initialise project

Thinking first about the delivery of the project, requirements are a github repo with CI workflow and a live, publicly accessible demo

- GitHub
    - [Repo](https://github.com/listingslab/bitcoin-hash)
- [Firebase Demo](https://bitcoin-hash-demo.web.app)

#### React App

`npx create-react-app react-app --template redux-typescript`

First I make sure that whatever code I write from this point is modular enough to pick up and place in any other JS app. I’ll do that by creating a folder called /src/BitcoinHash in which all code lives. The idea is that so long as the required dependencies exist in the main project, the Bitcoin Hash model/app/whatever should work anywhere. Like Storybook.

Now we’ve initialised the project by creating a repo, setting up a firebase environment and using create-react app to bootstrap the frontend app and chosen an API it’s time to code