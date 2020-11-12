import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

// The below reducer will create a property called balance on state
const balance = (state = 0, action) => { // default value is 0
    let balance;

    switch(action.type) {
        case constants.SET_BALANCE:
            balance = action.balance;
            break;
        case constants.DEPOSIT:
            balance = state + action.deposit;
            break;
        case constants.WITHDRAW:
            balance = state - action.withdrawal;
            break;
        default:
            // return cookie data if present or the state
            balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
    }

    bake_cookie(BALANCE_COOKIE, balance);
    
    return balance;
}

export default balance;
