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
