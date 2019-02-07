import React from 'react';

const BookListItem = ({ id, author, title, publisher,
                        smallThumbnail, infoLink }) => {
  return (
    <div
      key={id}
      className="book-item-container"
    >
      <img className="book-image" src={smallThumbnail} alt="" />
      <div className="book-description">
        <span>
          <h3 className="book-title">
            <a target="_blank" className="book-detail" rel="noopener noreferrer" href={infoLink}>
              {title}
            </a>
          </h3>
          <p>Written by: <span className="book-detail">{author}</span></p>
          <p>Publisher: <span className="book-detail">{publisher}</span></p>
        </span>
      </div>
    </div>
  )
}

export default BookListItem;
