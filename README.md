
# Land and property registers in real estate using blockchain:
Imagine spending all your life saving on a home for your family, one night you hear pounding on the doors, people demanding you evacuate the house immediately. You purchased your property but don’t have the legal papers to back up your claim. For dozens of possible reasons; you either bought your house from someone who didn’t have them or faked them, you lost these papers, the agencies didn’t have the proper information and etc… This is a situation for thousands of people fear every day, according to the world bank, 70% of people don’t have legally registered land! I want to create a DAPP for registering/saving all land properties to solve this problem. We have the same problems in Afghanistan , we have lots of problems on real estate one of those is the limitation/lack of data. I want to create a decentralized application for transferring, registering and viewing land ownership using blockchain addresses on Ethereum. Land and property registers.







# Web app URL:
https://faezakazemi.github.io/blockchain-developer-bootcamp-final-project/




# VIDEO TOUR
Video Tour: https://www.loom.com/share/2862dfb2d2484b19becd1efd610f97d5

### Prerequisites
- Node.js >= v14
- Truffle and Ganache
- npm

- - Clone code 
 ``
git clone :https://github.com/FaezaKazemi/blockchain-developer-bootcamp-final-project.git
``
- Run `npm install` in root to install Truffle build and smart contract dependencies
- Run local testnet in port `8545` with an Ethereum client, e.g. Ganache
- `truffle migrate --network development `
- Run tests `truffle test`
- `cd vapp`
- `npm install`
- `npm run serve`
- Open `http://localhost:8080`

## DIRECTORY STRUCTURE


```bash
.
├── build
│   └── contracts
│        ├── Migrations.json
│        ├── RealEstateContract.json
│        ├── SafeMath.json
├── contracts
│        ├── Migrations.sol
│        ├── RealEstateContract.sol
│         ├── SafeMath.sol
├── migrations
│        ├── 1_initial_migration.js
├── test
│        ├── landTest.js
└── truffle-config.js
├── v-app
│   └── public
│       ├── favicon.ico
│       ├── index.html
│   └── src
│        └── component
│           ├── LandForm.vue
│           ├── navbar.vue
│        └── router
│           ├── index.js
│        └── views
│           ├── findEstateId.vue
│           ├── getEstate.vue
│           ├── registerEstate.vue
│           ├── transferEstate.vue
│           ├── About.vue
│           ├── Home.vue
│     ├── App.vue
│     ├── index.js
│     ├── main.js
│     ├── package-lock.jso
│     ├── package.json
```




