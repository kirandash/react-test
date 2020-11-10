import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;

        // Test returned value of reducer fn. Must return the balance value which is being set.
        expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
            .toEqual(balance);
    });
})
