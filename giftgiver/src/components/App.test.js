import React from 'react';
// helps in creating a shallow DOM
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

// Snapshot Test
it('renders correctly', () => {
    // Note: app.debug() works (app) does not
    expect(app.debug()).toMatchSnapshot();
});

// UI - unit test - for state variables initialization
it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    // expect(app.find('.gift-list').children().length).toEqual(1);
    expect(app.find('.gift-list').children().length).toEqual(2); // bcoz of test pollution from click event in prev test case
});
