import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
  * Factory fn to create a ShallowWrapper for the App component
  * @function setup
  * @param {object} props - Component props specific to this setup
  * @param {object} state - Initial state for setup
  * @returns {ShallowWrapper}
*/

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if(state) wrapper.setState(state);
  return wrapper;
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 * 
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

const wrapper = setup();

// Core tests
test('renders without error', () => {
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders icrement button', () => {
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

// Other complex tests
test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

// BDD
test('clicking button increments counter display', () => {
  // Note: checking behavior in display and not in state
  // since testing behavior not implementation
  
  // test implementation with state:
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find btn and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});
