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
  })
});
