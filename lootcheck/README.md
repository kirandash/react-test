# Lootcheck - Jest and Enzyme - BDD

## 1. Setup

## 2. Install Jest, Enzyme, Enzyme adapter and Snapshot Test App component
1. **Jest**
    * A **test runner** made by FB
    * Write tests in the __tests__ folder or with test.js
    * Snapshot testing, coverage and mocking.
2. **Enzyme**
    * A **test utility library** made by Airbnb
    * Manipulate React components and DOM behavior
    * Jest + Enzyme = TDD with React
3. Installation Steps: `npm i --save-dev enzyme enzyme-adapter-react-16` Note: jest-cli comes by default with jest. No need to install separately.
    * `npm install jest-cli --save-dev`: redundant
    * Add enzyme setup in setupTests.js file.
4. **Redux**: `npm i redux react-redux sfcookies --save`
5. **Snapshot test**:
    1. `toMatchSnapshot`:
        * is an essential method of Jest testing method called snapshot which keeps a record of our React component.
        * it tells if the new rendered version of the component has changed and is different from the prev one.
    2. run test: 
        - will create __snapshotes__ folder and App.test.js.snap file which will have a snapshot of App component under shallowWrapper
        * Note: On changing app component content: the test will fail saying there is no snapshot match. To update the snapshot in __snapshots__ folder **press "u"** and this will pass the test

## 3. Redux
1. The **store** is one data object for the app.
2. **Reducers** update the store.
3. **Actions** activates reducers.

## 4. Test Action to set the balance
1. Test returned object of action creator fn.

## 5. Test Reducer - For setting balance
1. Test returned value of reducer fn. Must return the balance value which is being set.

## 6. Add store to App and Test Snapshot Wallet component
1. Create store in index.js and prvoide it to App using Provider.
2. Create Wallet component. 
    * Snapshot test
    * Data viewing test

## 7. Render Wallet - Test render of connected Wallet component in App
1. Add test to check if Wallet component is present in App component.
2. Note: Must check for connected component for rendering. Since Wallet is connected to store here.

## 8. Redux Deposit and Withdraw methods
1. Add test for deposit and withdraw actions in src/actions/balance.test.js and reducers in src/reducers/balance.test.js
2. Add code to pass the tests

## 9. Local Wallet Balance with State - Test input change event and state data
1. Test if input to withdraw or deposit exists or not on wallet component.
2. Check if on typing amount in input changes the data in state.
3. Add code in Wallet.js to pass the test

## 10. Dispatch Deposit and withdraw - Test with jest.fn
1. Link action creators to Wallet component via connect fn. Thus the ac will be available to Wallet via prop.
2. Test Dispatch methods using `jest.fn()`
3. Check if on click method is being dispatched using `toHaveBeenCalledWith`
4. Note: Only need to check if dispatch is being called or not. Value change is being already tested in reducer.

## 11. Store Data with Cookies
1. Test by adding a second reducer and then check if the data in second reducer matches the modification done by first reducer.
2. Add the functionality using sfcookies: read_cookie, bake_cookie
3. Note: Since jest provides a mock window object while testing. Cookies will be saved in the mock environment and can be tested.

## 12. Async Actions, Middleware and Redux Thunk
1. **Async actions**:
    * Actions in redux that allow for asynchronous behavior.
    * An API request shouldn't block the application.
    * The API request should happen in the background.
2. How do async actions work?
    * Use **middleware** - allows us to return a promise. and not just an object
    * Adds a layer b/w the async code and the store
    * **Redux-thunk**

## 13. Accessing the Bitcoin API
1. coindesk api:
    * https://www.coindesk.com/coindesk-api
2. `npm i redux-thunk`
3. For testing redux-thunk: `npm i redux-mock-store fetch-mock --save-dev`
4. fetch-mock has dependency on node-fetch. `npm install node-fetch`

## 14. Fetch Bitcoin value through Redux - Redux Action
1. While testing - only check if API is being fetched or not and check for one property. No need to check whole JSON content.
2. Middleware returns a promise which in the end dispatches an action. For testing: We can create a mock store and then compare if the output of middleware matches the mock store or not.

## 15. Bitcoin Redux Reducer
1. Make a reducer for the bitcoin API redux call. (bitcoin.test.js)

## 16. Combine Reducers
1. Redux allows us to combine two or more reducers.
2. reducers/index.js - will have combination of all reducers and then output it.
3. expect default root reducer to match initial state of 0 balance and empty bitcoin object
4. Note: While using connect for mapping redux to component: do not use the entire state but rather use individual property viz: state.balance.
