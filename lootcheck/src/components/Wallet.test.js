import { shallow } from 'enzyme';
// Imports the connected Wallet
// import Wallet from './Wallet';
// Import the unconnected version for testing
import { Wallet } from './Wallet'

describe('Wallet', () => {
  const props = { balance: 20 };
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

  });
});