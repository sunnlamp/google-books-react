import React from 'react';
import { mount, shallow } from 'enzyme';
import BookSearch from './BookSearch';

describe('BookSearch', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<BookSearch />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should display a form with a input', () => {
    expect(wrapper.containsAllMatchingElements([
      <form>
        <input />
      </form>
    ]))
  })
});

describe('mounted BookSearch', () => {
  let wrapper;
  beforeEach(() => wrapper = mount(<BookSearch />));

  // it('calls handleInputChange when a value is entered', () => {
  //   const spy = jest.spyOn(wrapper.instance(), 'handleInputChange');
  //   const input = wrapper.find('input').simulate('click');
  //   input.value = "Harry Potter";
  //   input.simulate('change', input);
  //   expect(spy.called).toEqual(String);
  //   spy.mockRestore();
  // });
});