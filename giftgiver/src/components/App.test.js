import React from 'react';
// helps in creating a shallow DOM
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
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

    describe('when clicking the `add-gift` button', () => {
        beforeEach(() => {
            // before each test
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            // To reverse the effect of btn click after each test
            app.setState({ gifts: [] });
        });

        it('adds a new gift to `state`', () => {
            // app.find('.btn-add').simulate('click');
            expect(app.state().gifts).toEqual([{ id: 1 }]);
        });
        
        it('adds a new gift to the rendered list', () => {
            // app.find('.btn-add').simulate('click');
            expect(app.find('.gift-list').children().length).toEqual(1);
            // expect(app.find('.gift-list').children().length).toEqual(2); // bcoz of test pollution from click event in prev test case
        });
    });
})
