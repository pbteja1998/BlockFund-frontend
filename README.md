# BlockFund

A dApp based on [truffle-vue](https://truffleframework.com/boxes/truffle-vue) truffle box. Comes with [`Vue.js`](https://vuejs.org/), [`vue-router`](https://router.vuejs.org/en/), [`Vuex`](https://vuex.vuejs.org/en/intro.html) and [`sass-loader`](https://github.com/webpack-contrib/sass-loader).

## Directory structure

```
/
|
+-- build/
|   |
|   +-- contracts/
|   |   |
|   |   + truffle compiled contracts
|
+-- config/
|   |
|   +-- babel/
|   |   |
|   |   + babel config files - to come (babel does not allow to specify a custom config file path - yet - so the babel configuration occurs in the package.json file for now)
|   |
|   +-- eslint/
|   |   |
|   |   + estlint config files
|   |
|   +-- postcss/
|   |   |
|   |   + postcss config files
|   |
|   +-- vue-loader
|   |   |
|   |   + vue-loader config files
|   |   
|   +-- webpack/
|   |   |
|   |   + webpack config files
|   
+-- contracts/
|   | 
|   + solidity contracts
|
+-- migrations/
|   |
|   + truffle migrations files
|
+-- scripts/
|   |
|   + webpack scripts
|
+-- src/
|   |
|   + vue.js dapp files
|
+-- static/
|   |
|   + vue.js dapp static files
|
+-- test/
|   |
|   +-- e2e/
|   |   |
|   |   + e2e test files
|   |
|   +-- truffle/
|   |   |
|   |   + truffle test files
|   |
|   +-- unit/
|   |   |
|   |   + unit test files
```

## Installation

1. Install Dependencies
    ```
    npm install
    ```

2. Run the webpack server for front-end hot reloading. Smart contract changes do not support hot reloading for now.
	```
	npm run start
	```
    
## Tests
This box comes with everything bundled for `unit` and `e2e` contracts testing.

1. `unit` and `e2e` tests.
	```
	npm run test/dapp
	```

2. Alternatively you can directly run `unit` and `e2e` contracts tests in one command.
	```
	npm run test
	```

## Build for production
To build the application for production, use the build command. A production build will be compiled in the `dist` folder.
```javascript
npm run build
```
