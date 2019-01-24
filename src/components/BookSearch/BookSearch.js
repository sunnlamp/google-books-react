import React, { Component } from 'react';
import Form from '../Form/Form';
import api from '../../utils/api';

export default class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookQuery: "",
      books: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let { bookQuery } = this.state;
    api.getBookData(bookQuery)
    .then(response => response.json())
    .then(data => {
      this.setState({
        books: data.items
      })
    })
  }

  handleClearForm = event => {
    event.preventDefault();
    this.setState({
      bookQuery: ""
    })
  }

  render = () => {
    var { books } = this.state;
    return (
      <div>
        <Form 
          bookQuery={this.bookQuery}
          inputChange={this.handleInputChange}
          formSubmit={this.handleFormSubmit}
        />
        <div>
          {!this.state.books.length ? (
            <h1>No books to display, please enter an author or title.</h1>
          ) : (
              <ul>
                {this.state.books.map(book => {
                  return (
                    <li
                      key={book}
                    >
                    <p>{book.volumeInfo.authors[0]}</p>
                    <p>{book.volumeInfo.title}</p>
                    <p>{book.volumeInfo.publisher}</p>
                    
                    <a href={book.previewLink}>More info</a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
      </div>
    )
  }
}

// Type in a query and display a list of books matching that query.
// Each item in the list should include the book's author, title, 
// and publishing company, as well as a picture of the book.
// From each list item, you should also be able to navigate to more 
// information about the book, but this information does not necessarily
// need to appear on a page within your application.In other words,
// this could link out to an external site with more information about that particular book.
// items[0].volumeInfo.authors[0] -- authors
// items[0].volumeInfo.title
// items[0].volumeInfo.publisher
// items[0].imageLinks.thumbnail or smallThumbnail
// items[0].canonicalVolumeLink -- link
// items[0].previewLink