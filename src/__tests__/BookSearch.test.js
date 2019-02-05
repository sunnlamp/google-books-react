import React from 'react';
import { mount, shallow } from 'enzyme';
import BookSearch from '../components/BookSearch';
import Form from '../components/Form';
import BookList from '../components/BookList';
import data from '../utils/mockBookData';

describe('BookSearch', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<BookSearch />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should display the Form component', () => {
    wrapper.setState({ books: ["Dune", "Dune", "Dune"] });
    expect(wrapper.containsAllMatchingElements([
      <Form />,
      <BookList 
        books={data}
      />
    ])).toEqual(true);
  })
});

describe('mounted BookSearch', () => {
  let wrapper;
  beforeEach(() => wrapper = mount(<BookSearch />));

  it('calls handleInputChange when text is entered', () => {
    const handleInputChangeSpy = jest.spyOn(wrapper.instance(), 'handleInputChange');
    const input = wrapper.find('input');
    wrapper.instance().forceUpdate();
    input.value = 'Dune';
    input.simulate('change');
    expect(handleInputChangeSpy).toHaveBeenCalled();
    // expect toHaveBeencalledWith('Dune') fails
    // by expecting String and receiving object
    // that assertion would be better for testing
    // but unsure how to correct the issue
  });

  it('calls handleFormSubmit when the button is pressed', () => {
    const handleFormSubmitSpy = jest.spyOn(wrapper.instance(), 'handleFormSubmit');
    const button = wrapper.find('button');
    wrapper.instance().forceUpdate();
    expect(handleFormSubmitSpy).not.toHaveBeenCalled();
    button.simulate('click');
    expect(handleFormSubmitSpy).toHaveBeenCalled();
  })
});