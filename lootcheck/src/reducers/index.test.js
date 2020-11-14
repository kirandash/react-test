import rootReducer from './index';

describe('rootReducer', () => {
    it('initializes the default state', () => {
        // expect default root reducer to match initial state of 0 balance and empty bitcoin object
        expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
    });
});
