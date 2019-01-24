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
    .then(response => {
      console.log(response);
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
                    {book.title}
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