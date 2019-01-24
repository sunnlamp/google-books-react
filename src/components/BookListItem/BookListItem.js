import React from 'react';

const BookListItem = ({ key, author, title, publisher,
                        smallThumbnail, infoLink }) => {
  return (
    <li
      key={key}
    >
      <p>{author}</p>
      <p>{title}</p>
      <p>{publisher}</p>
      <p><img src={smallThumbnail} alt="" /></p>
      <p><a target="_blank" rel="noopener noreferrer" href={infoLink} >More info</a></p>
    </li>
  )
}

export default BookListItem;
