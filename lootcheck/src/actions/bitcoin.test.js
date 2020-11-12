// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';

// configureMockStore allows us to provide middlewares
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });

// Mock response matching JSON structure of real API
const mockResponse = { body: { bpi: 'bitcoin price index' } };

fetchMock.get(
    'https://api.coindesk.com/v1/bpi/currentprice.json',
    mockResponse
);

it('creates an async action to fetch the bitcoin value', () => {
    const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];

    // fetchBitcoin returns promise and thus should be handled with .then
    // For jest: it block in order to successfully complete the test execution, we must return the promise
    return store.dispatch(fetchBitcoin()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});
