import * as constants from '../actions/constants';

// The below reducer will create a property called balance on state
const balance = (state = 0, action) => { // default value is 0
    switch(action.type) {
        case constants.SET_BALANCE:
            return action.balance;
        case constants.DEPOSIT:
            return state + action.deposit;
        case constants.WITHDRAW:
            return state - action.withdrawal;
        default:
            return state;
    }
}

export default balance;
