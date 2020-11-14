// import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app.debug()).toMatchSnapshot()
  });

  it('contains a connected Wallet component', () => {
    // Can log using .debug() to check the content of app
    // console.log(app.debug());

    // Checking If unconnected wallet component exists
    // expect(app.find('Wallet').exists()).toBe(true);

    // Checking if connected wallet component exists
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });

  it('contains a connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  });

  it('contains a link to the coindesk price page', () => {
    expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
  });

});
