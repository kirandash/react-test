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
});