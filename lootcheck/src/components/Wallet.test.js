import { shallow } from 'enzyme';
// Imports the connected Wallet
// import Wallet from './Wallet';
// Import the unconnected version for testing
import { Wallet } from './Wallet'

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw }; // action creator will be available to prop
  const wallet = shallow(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wallet.debug()).toMatchSnapshot()
  });

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20')
  });

  it('creates an input to deposit into or withdraw from the balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  describe('when the user types into the wallet input', () => {
    const userBalance = '25';
    
    beforeEach(() => {
        // Simulate change evernt before all test cases in it blocks below
        wallet.find('.input-wallet')
            .simulate('change', { target: { value: userBalance } });
    });

    it('updates the local wallet balance in `state` and converts it to a number', () => {
        expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    // Deposit Scenario
    describe('and the user wants to make a deposit', () => {
      // Simulate Click event before each test case
      beforeEach(() => wallet.find('.btn-deposit').simulate('click'));

      it('dispatches the `deposit()` it receives from props with local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    // Withdraw Scenario
    describe('and the user wants to make a withdrawal', () => {
      // Simulate Click event before each test case
      beforeEach(() => wallet.find('.btn-withdraw').simulate('click'));

      it('dispatches the `withdraw()` it receives from props with local balance', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});