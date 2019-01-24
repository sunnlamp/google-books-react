import React from 'react';

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => {
        return (
          <li
            key={book.etag}
          >
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.title}</p>
            <p>{book.volumeInfo.publisher}</p>
            <p><img src={book.volumeInfo.imageLinks.smallThumbnail} alt=""/></p>
            <p><a target="_blank" rel="noopener noreferrer" href={book.volumeInfo.infoLink} >More info</a></p>
          </li>
        );
      })}
    </ul>
  )
}

export default BookList;