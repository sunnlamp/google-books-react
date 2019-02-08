import React from 'react';
import BookList from './BookList';

const Pagination = ({ indexOfFinalBook, indexOfFirstBook,
  books, booksPerPage, handlePageClick }) => {
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(books.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(pageNumber => {
    return (
      <button
        className="page-button"
        key={pageNumber}
        id={pageNumber}
        onClick={handlePageClick}
      >
        {pageNumber}
      </button>
    )
  })

  const currentBooks = books.slice(indexOfFirstBook, indexOfFinalBook);
    return (
      <BookList books={currentBooks}>
        {renderPageNumbers}
      </BookList>
    )
  }

  export default Pagination;