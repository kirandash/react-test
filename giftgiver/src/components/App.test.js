import React from 'react';
// helps in creating a shallow DOM
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});
