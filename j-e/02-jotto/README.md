# Jotto

## 1. Setup
1. `npm i --save-dev enzyme enzyme-adapter-react-16`

## 2. Testing PropTypes
1. [Docs](https://github.com/facebook/prop-types)
2. prop-types: `npm install --save prop-types`
3. [check-prop-types](https://github.com/ratehub/check-prop-types#readme)
    * with only prop types if there is any prop mismatch it will throw a warning. But in order to throw a clear error message we can use the check-prop-types package. So that we don't have to manually check for error possibilities.

## 3. Add default props in setUp (DRY)

## 4. Add Enzyme configuration to setupTests.js
1. Configuration here will be applied to all tests in our app
2. If we are not using cra, we have to manually configure this in our jest config file

## 5. Summary
1. `findByTestAttr` in utils
2. `checkProps` in utils
3. Do not abstract `setup()` since too different for each component
4. Enzyme adapter in setupTests.js
5. **Caution**: 
    * Too many abstractions - hard to read tests
    * Less useful in diagnosing failing tests
