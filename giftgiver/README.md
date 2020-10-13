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
1. `npm install enzyme --save-dev` Note: jest-cli comes by default with jest. No need to install separately.
    * `npm install jest-cli --save-dev`: redundant
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
