import React from 'react';
import { shallow } from 'enzyme';
import BookListItem from '../../src/components/BookListItem/BookListItem';

describe('BookListItem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <BookListItem
        key={"2t3oSSU9Pwc1"}
        author={"Frank Herbert"}
        title={"Dune"}
        publisher={"Penguin Books"}
        smallThumbnail={"http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"}
        infoLink={"https://books.google.com/books?id=B1hSG45JCX4C&dq=dune&hl=&source=gbs_api"}
      />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });
});
