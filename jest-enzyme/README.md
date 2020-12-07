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

### 3. Enzyme Intro
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
    * jest-enzyme: for communication b/w jest and enzyme
    * enzyme-adapter-react-16: tells enzyme what kind of code to expect for testing. i.e react 16
