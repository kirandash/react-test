import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

// Core tests
test('renders without error', () => {

});

test('renders icrement button', () => {

});

test('renders counter display', () => {

});

// Other complex tests
test('counter starts at 0', () => {

});

// BDD
test('clicking button increments counter display', () => {
  // Note: checking behavior in display and not in state
  // since testing behavior not implementation
});
