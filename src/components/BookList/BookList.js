import React from 'react';
import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ books }) => {
  return (
    <div className="books-container">
      {books.map(book => {
        return (
          <BookListItem
            key={book.etag}
            id={book.etag}
            author={book.volumeInfo.authors}
            title={book.volumeInfo.title  }
            publisher={book.volumeInfo.publisher}
            smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
            infoLink={book.volumeInfo.infoLink}
          />
        );
      })}
    </div>
  )
}

export default BookList;