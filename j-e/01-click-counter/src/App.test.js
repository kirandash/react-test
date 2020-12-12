import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const wrapper = shallow(<App/>)

// Core tests
test('renders without error', () => {
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders icrement button', () => {
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

// Other complex tests
test('counter starts at 0', () => {

});

// BDD
test('clicking button increments counter display', () => {
  // Note: checking behavior in display and not in state
  // since testing behavior not implementation
});
