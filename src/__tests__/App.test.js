import React from 'react';
import { shallow } from 'enzyme'
import App from '../components/App';
import BookSearch from '../components/BookSearch';

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the BookSearch component', () => {
    expect(wrapper.containsMatchingElement(<BookSearch />)).toEqual(true);
  })
})

