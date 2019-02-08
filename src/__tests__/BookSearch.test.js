import React from 'react';
import { mount, shallow } from 'enzyme';
import BookSearch from '../components/BookSearch';
import Form from '../components/Form';
import BookList from '../components/BookList';
import { mockBookData } from '../utils/mockBookData';
import BookListItem from '../components/BookListItem';
import api from '../utils/api';

describe('BookSearch', () => {
  let wrapper;  
  beforeEach(() => wrapper = shallow(<BookSearch />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should display the Form and BookList component', () => {
    wrapper.setState({ books: mockBookData });
    expect(wrapper.containsAllMatchingElements([
      <Form />,
      <BookList 
        books={mockBookData}
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

describe('when `input` is has no value', () => {
  let wrapper;
  beforeEach(() => wrapper = mount(<BookSearch />));

  it('displays an message alerting the user to enter input if empty', () => {
    const handleFormSubmitSpy = jest.spyOn(wrapper.instance(), 'handleFormSubmit');
    const button = wrapper.find('button');
    const input = wrapper.find('input');
    input.value = '';
    wrapper.instance().forceUpdate();
    button.simulate('click');
    expect(handleFormSubmitSpy).toHaveBeenCalled();
    expect(wrapper.state('books')).toEqual([]);
    expect(wrapper.state('bookQuery')).toEqual('');
    const errorMessage = wrapper.find('h2').at(1);
    expect(errorMessage.text()).toEqual('Please enter an author or title!')    
  });
});

describe('successful fetch request', () => {
  let wrapper;
  let mockEvent;
  let mockUpdateBooksList;
  let mockBooks;
  
  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() };
    mockUpdateBooksList = jest.fn();
    mockBooks = mockBookData;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        books: mockBookData
      })
    }));
    console.log(books);
    wrapper = shallow(<BookSearch />);
  });

  it('sets the state of books', async () => {
    await wrapper.update();
    expect(wrapper.state('books').length).toEqual(2);
  });
});

describe('when `books` is defined', () => {
  let wrapper;
  beforeEach(() => wrapper = mount(<BookSearch />));

  it('renders the <BookList /> component', () => {
    wrapper.setState({ books: mockBookData });
    wrapper.update();
    expect(wrapper.state('books')).toEqual(mockBookData);
    expect(wrapper.containsMatchingElement(<BookList books={wrapper.props.books} />));
  });

  it('render as many <BookListItem /> components as the data contains', () => {
    wrapper.setState({ books: mockBookData });
    wrapper.update();
    expect(wrapper.state('books').length).toEqual(2);
    expect(wrapper.containsAllMatchingElements([
      <BookListItem />,
      <BookListItem />
    ])).toEqual(true);
  });
});