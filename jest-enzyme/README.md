# Jest and Enzyme - With React 16

### 1. Setting up jest without create-react-app:
    * `npm i --save-dev jest`
    * `jest --watch` in package.json
    * Create `App.test.js`

### 2. Jest Watch mode, test files and tests
1. **Jest watch mode**: Jest runs test on files that has changed since last commit. Thus efficient and does not run all tests.
    * Can press key like a, w, o etc to control how tests run
2. **Test files**: 
    * files ending with .test.js
3. **Tests**:
    * Jest uses `it` or `test` to define tests
    * `test` is mentioned in the official doc
    * can use `throw Error()` to fail a test and stop execution

### 3. Enzyme Intro and Setup
1. Creates virtual DOM for testing
2. Allows testing without a browser
3. Enzyme has better toolkit
    * Search through DOM
        * jQuery style selectors
    * simulate simple events viz click, change, blur etc
    * Shallow rendering: 
        * Renders componenets only one level deep
        * Render parent, but uses placeholders for children. Thus cleaner and quicker testing
    * Mount rendering:
        * Renders all child components multilevel
    * Access to prop and state
4. Install: `npm i --save-dev enzyme jest-enzyme enzyme-adapter-react-16`
    * enzyme
    * jest-enzyme: for communication b/w jest and enzyme (redundant)
    * enzyme-adapter-react-16: tells enzyme what kind of code to expect for testing. i.e react 16
5. Configure enzyme in App.test.js

### 4. Using Enzyme in a test
1. https://enzymejs.github.io/enzyme/docs/api/shallow.html
2. `debug()`: returns the DOM as a string
3. **expect**: with mocha we use chai as the assertion library. Jest has it's built in assertions like `expect` api
    * https://jestjs.io/docs/en/expect

### 5. Types of Test
1. Unit Tests:
    * Tests one piece of code (usually one fn)
2. Integration Tests:
    * How multiple units work together
3. Acceptance / e2e Tests
    * How a user would interact with the app
    * Tools like selenium or cypress to test this. 
    * Ex: user using the app, calling db tests etc

### 6. Testing Tradeoffs
* Ideally, do not want to re-write tests after a refactor
* Keep in mind when writing tests Test **behavior** (what app should do) instead of **implementation** (how it works)
    * Then, if implementation changes, tests remain the same
        * Testing implementation is brittle (easily broken when app still works)
    * Ex: App - counter on button click
        * onClick fn for button calls incrementCounter fn
        * counter displays increment by one
        * Testing behavior: (Recommended)
            * set initial state
            * simulate btn click
            * check count has incremented by one from prev state
        * Testing implementation (Not recommended)
            * set initial state
            * simulate btn click
            * check to see if particular fn was called
* Easy diagnosis of failing tests
    * Ex: Shopping cart for custom t-shirt
        * select t-shirt style, size, color, no of shirts to order, text on t-shirt etc
        * Add to cart
    * Difficult to diagnose test: 
        * Test that cart has correct content after all process
        * if it fails, which step was the problem. hard to investigate
    * want efficiency in diagnosing failing tests
    * Make it easier to diagnose
        * after each user action
            * test expected internal state change
            * or test if a fn ws called (TRADE OFF)
    * Granual (unit) testing leads to... easy diagnosis, brittle tests
    * Broader (integration) testing leads to... more robuts, but difficult to find out what caused failure
* Art not science:
    * some cases: optimize for ease of diagnosis
    * some cases: optimize for less brittle tests

### 7. Snapshot
1. No TDD
2. Brittle(any change to component will break)
3. Difficult to diagnose
    * too easy to ignore failure and update
4. No test intent
    * If there's a failure, does test still meet spec
5. If used, it's alongside traditional tests
