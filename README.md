# BlockFund

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
