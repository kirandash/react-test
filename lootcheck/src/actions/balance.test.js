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
