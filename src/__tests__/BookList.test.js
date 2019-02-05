import React from 'react';
import { mount } from 'enzyme';
import BookList from '../../src/components/BookList/BookList';
import BookListItem from '../../src/components/BookListItem/BookListItem';
import { data } from '../../src/utils/mockBookData';

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
