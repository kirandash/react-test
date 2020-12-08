# Click Counter

### 1. Setup
1. `npm i --save-dev enzyme enzyme-adapter-react-16`
2. [Doc] (https://github.com/enzymejs/enzyme)

### 2. Configure Enzyme and Write tests

### 3. Test component rendering
1. For traversing through DOM while testing use `data-test` attributes and not class or ids since developers in future might change class or id.
2. [selectors](https://enzymejs.github.io/enzyme/docs/api/selector)
3. data-test: naming convention: `component-compname`

### 4. Remove data-test attributes from production
1. `npm install --save-dev babel-plugin-react-remove-properties`
2. `npm run eject`: makes config files editable