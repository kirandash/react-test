// import all constants for action types
import * as constants from './constants';
// import all action creators
import * as actions from './balance';

it('creates an action to set the balance', () => {
    const balance = 0;
    
    // Expected action to be returned from action creator fn
    const expectedAction = { type: constants.SET_BALANCE, balance };

    // checking setBalance action creator to match with expectedAction
    expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
    const deposit = 10;

    // Expected action obj to be returned from action creator fn
    const expectedAction = { type: constants.DEPOSIT, deposit };

    // checking retured val of deposit action creator to match with expectedAction
    expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', () => {
    const withdrawal = 10;

    // Expected action obj to be returned from action creator fn
    const expectedAction = { type: constants.WITHDRAW, withdrawal };

    // checking retured val of withdraw action creator to match with expectedAction
    expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});
