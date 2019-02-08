import React, { Component } from 'react';
import Form from './Form';
import BookList from './BookList';
import api from '../utils/api';

export default class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookQuery: "",
      books: [],
      errorMessage: "",
      statusMessage: "No books to display, please enter an author or title."
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
    if (bookQuery !== "") {
      api.getBookData(bookQuery)
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data.items
        })
      })
      .catch(err => {
        this.setState({
          errorMessage: "The following error has occured: " + err
        });
        console.log(err);
      });
    } else {
      this.setState({
        statusMessage: "Please enter an author or title!"
      });
    }
  }

  render = () => {
    var { books, statusMessage, errorMessage } = this.state;
    return (
      <div className="container">
        {
          errorMessage !== "" ? (
            <h2>{errorMessage}</h2>
          ) : (
            <h2>Google Books API Search</h2>
          )
        }
        <Form 
          bookQuery={this.bookQuery}
          inputChange={this.handleInputChange}
          formSubmit={this.handleFormSubmit}
        />
        {
          books !== null && !books.length ? (
            <h2>{statusMessage}</h2>
          ) : (
            <BookList
              books={books}
            />
          )
        }
      </div>
    )
  }
}
