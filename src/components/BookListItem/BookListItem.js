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
          <p>Title: <span className="book-detail">{title}</span></p>
          <p>Written by: <span className="book-detail">{author}</span></p>
          <p>Publisher: <span className="book-detail">{publisher}</span></p>
          <a target="_blank" rel="noopener noreferrer" href={infoLink} >More info</a>
        </span>
      </div>
    </div>
  )
}

export default BookListItem;
