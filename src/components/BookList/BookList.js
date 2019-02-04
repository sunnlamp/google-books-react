import React from 'react';
import BookListItem from '../BookListItem/BookListItem';
import noImageAvailable from '../../assets/image-unavailable.jpg';

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
        
        smallThumbnail = (book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : noImageAvailable)
        return (
          <BookListItem
            key={book.etag}image
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