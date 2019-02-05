import React from 'react';
import { mount } from 'enzyme';
import BookList from '../components/BookList';
import BookListItem from '../components/BookListItem';
import { data } from '../utils/mockBookData';

describe('BookList', () => {
  let wrapper;
  beforeEach(() => wrapper = mount(<BookList books={data} />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(5);
  });

  it('renders the BookList component', () => {
    expect(wrapper.containsAllMatchingElements([
      <BookListItem />,
      <BookListItem />
    ])).toEqual(true);
  })
})
