# Gift Giver - Jest and Enzyme

## 1. Setup
1. Install node, npm
2. Install yarn: `npm install -g yarn`

## 2. TDD - Jest, Enzyme and More
1. What is TDD?
    * Test written before code for feature to pass the test.
    * Write a unit test
    * Run the test. See it fail
    * Write the feature code to pass the test
    * Refactor the code
2. Why TDD?
    * It reduces errors and defects in the long run
    * It leads to higher quality code
3. **Jest**
    * A **test runner** made by FB
    * Write tests in the __tests__ folder or with test.js
    * Snapshot testing, coverage and mocking.
4. **Enzyme**
    * A **test utility library** made by Airbnb
    * Manipulate React components and DOM behavior
    * Jest + Enzyme = TDD with React

## 3. Set up Enzyme, Run Jest runner and Write first unit test
* **setup**: https://enzymejs.github.io/enzyme/docs/installation/index.html
1. `npm i --save-dev enzyme enzyme-adapter-react-16` Note: jest-cli comes by default with jest. No need to install separately.
    * `npm install jest-cli --save-dev`: redundant
    * Add enzyme setup in setupTests.js file.
2. `npm i react-bootstrap`
3. To run test: `npm run test`
4. If any conflicts in dependencies: 
    * `rm -rf node_modules`
    * `npm i`
5. on running test: Jest, the task runner will look for any file in tests folder or with test.js extension.
6. Note: test will auto run on saving
7. Code App.test.js
8. **Shallow** from enzyme:
    - helps in creating a shallow DOM in test file. If our test file has child components, it will only load JSX of the child component and won't go any deeper than that.
9. `npm install react-dom react-test-renderer --save-dev`: redundant

## 4. Snapshot Test the App Component
1. `toMatchSnapshot`:
    * is an essential method of Jest testing method called snapshot which keeps a record of our React component.
    * it tells if the new rendered version of the component has changed and is different from the prev one.
2. run test: 
    - will create __snapshotes__ folder and App.test.js.snap file which will have a snapshot of App component under shallowWrapper
    * Note: On changing app component content: the test will fail saying there is no snapshot match. To update the snapshot in __snapshots__ folder **press "u"** and this will pass the test

## 5. Render the Gift List in the App - with Unit test
1. `expect(app.state().gifts).toEqual([]);`
2. Also add test case for adding new state data for gift.

## 6. Render Gift Giver and the Gift List
1. Hook App.js to index.js
    - No need to write test for this. Since this is default behavior already implemented by create-react-app and tested well.
2. Note: Test pollution: 
    * Is when one of the test fn is affecting other test fns results. Ideally all test fns or cases should be isolated and should not affect each other.

## 7. Behavior Driven Development
1. BDD:
    * A variation of TDD that tests for user scenarios.
    * Can define scenarios with: Given, when, then...
    * Ex: Given notes, when deleting, then remove a note.
    * Best consists of **scenarios/specifications**.

## 8. BDD in GiftGiver
1. Common practice to **group tests together**.
2. Put all unit tests for app component under one `describe` block.
    * Note: this will make the snapshot obsolte because of change in test structure. press u to update the snapshot. press a to rerun all the tests.

## 9. Test and Build the Gift Component
1. Write snapshot test for Gift in Gift.test.js
