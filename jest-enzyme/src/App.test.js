import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App/>)
  // returns DOM as a string
  // console.log(wrapper.debug())
  expect(wrapper).toBeTruthy();
});
