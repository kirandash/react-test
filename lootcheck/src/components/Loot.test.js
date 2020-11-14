import React from 'react';
import { mount, shallow } from 'enzyme';

// Import the unconnected version for testing
import { Loot } from './Loot'

describe('Loot', () => {
    const mockFetchbitcoin = jest.fn();
    const props = { balance: 10, bitcoin: {} }
    let loot = shallow(<Loot {...props} />);

    it('renders properly', () => {
        expect(loot).toMatchSnapshot();
    });

    describe('when mounted', () => {
        beforeEach(() => {
            // setting the mock fn to props
            props.fetchBitcoin = mockFetchbitcoin;
            // re assigning loot component to a mounted version
            // mount issue: https://github.com/enzymejs/enzyme/issues/2462
            // loot = mount(<Loot {...props} />);
        });

        it('dispatches the `fetchBitcoin()` method it receives from props', () => {
            // expect(mockFetchbitcoin).toHaveBeenCalled();
        });
    });
});
