import React from 'react';
import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ books }) => {
  return (
    <div className="books-container">
      {books.map(book => {
        if (!book.volumeInfo.authors) {
          return (
            <BookListItem
              key={book.etag}
              id={book.etag}
              author={"No author available"}
              title={book.volumeInfo.title}
              publisher={book.volumeInfo.publisher}
              smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
              infoLink={book.volumeInfo.infoLink}
            />
          )
        } else if (book.volumeInfo.authors.length > 1) {
          let authors = book.volumeInfo.authors.join(' & ');
          return (
            <BookListItem
              key={book.etag}
              id={book.etag}
              author={authors}
              title={book.volumeInfo.title}
              publisher={book.volumeInfo.publisher}
              smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
              infoLink={book.volumeInfo.infoLink}
            />
          )
        }
        return (
          <BookListItem
            key={book.etag}
            id={book.etag}
            author={book.volumeInfo.authors}
            title={book.volumeInfo.title}
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