import React from 'react';
import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => {
        return (
          < BookListItem
            key={book.etag}
            author={book.volumeInfo.authors}
            publisher={book.volumeInfo.publisher}
            smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
            infoLink={book.volumeInfo.infoLink}
          />
        );
      })}
    </ul>
  )
}

export default BookList;