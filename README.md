# Wallete

Wallete is Multi-Signature Ethereum wallet that utilizes the Magic SDK for the user authentication. This allows the user to interact with the Rinkeby (Ethereum testnet) without cumbersome passkeys or addresses. The contract the web app interacts with is included in the contracts folder.

## Installation

Ensure that the following tools are installed:

- Node Package Manager `npm`
- Truffle `truffle` (If planning on modifying/compiling contract)

Then make a clean install of the npm modules:
```bash
yarn install
```

### `.env` Setup

Create .env file in the root folder of the project. In order to run the project you need an enviroment variable called `MagicKey`. This is where your Magic API key should go.

You can create an account and get API keys from https://magic.link/

The .env should include:
```
MagicKey="YOUR_API_KEY"
```

## Usage

To launch on localhost:

```bash
yarn start
```

This should open a webpage at http://localhost:3000/

## Features

Wallete has the login page which authenticates using the Magic link SDK. The DID Token given for the session contains the information neccessary for the web app to do ether transactions.

### **Tabs**

**Assets:** displays the amount of ether that is currently stored on the smart contract that is deployed. The address of the contract is written above the table.

**Whitelist:** shows a table of all the ethereum addresses that are part of the whitelist of the smart contract. At the bottom of the page new addresses can be added along with 

**Transactions:** shows a dropdown table with all the transactions on the smart contract, with the ability to sign and view each transaction. At the bottom of the page new transactions can be started. All transactions have a approval threshold of 3 (once 3 users sign the transaction, the transactions is sent to the recipient).

## Authors and Acknowledgment

This repository was produced by students from the University of Michigan in collaboration with Formatic:
- Sangil Lee (iisangil)
- Sai Pavan Yerra (spvyerra)
- Helen Gao (hegao)
