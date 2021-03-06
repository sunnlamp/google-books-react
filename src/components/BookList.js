import React from 'react';
import BookListItem from './BookListItem';
import imageUnavailable from '../assets/image-unavailable.svg';

const BookList = ({ books }) => {
  let author, publisher, smallThumbnail;
  return (
    <div className="books-container">
      {books.map(book => {
        if (!book.volumeInfo.authors) {
          author = "No author available."
        } else if (book.volumeInfo.authors.length > 1) {
          author = book.volumeInfo.authors.join(" & ");
        } else {
          author = book.volumeInfo.authors[0];
        }
        publisher = (book.volumeInfo.publisher ? book.volumeInfo.publisher : "No publisher available")
        smallThumbnail = (book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : imageUnavailable)
        return (
          <BookListItem
            key={book.etag}
            id={book.etag}
            author={author}
            title={book.volumeInfo.title}
            publisher={publisher}
            smallThumbnail={smallThumbnail}
            infoLink={book.volumeInfo.infoLink}
          />
        );
      })}
    </div>
  )    
}

export default BookList;