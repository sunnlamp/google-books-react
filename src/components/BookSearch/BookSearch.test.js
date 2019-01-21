import React from 'react';
import { shallow } from 'enzyme';
import BookSearch from './BookSearch';

describe('BookSearch', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<BookSearch />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should display a form with a input', () => {
    expect(wrapper.containsAllMatchingElements([
      <form>
        <input />
      </form>
    ]))
  })
})