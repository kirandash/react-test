import React from 'react';
// helps in creating a shallow DOM
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
    // Note: app.debug() works (app) does not
    expect(app.debug()).toMatchSnapshot();
});
