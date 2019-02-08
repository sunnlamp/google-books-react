import React, { Component } from 'react';
import Form from './Form';
import Pagination from './Pagination';
import api from '../utils/api';

export default class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookQuery: "",
      books: [],
      statusMessage:"No books to display, please enter an author or title.",
      currentPage: 1,
      booksPerPage: 9
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    if (event.value === "") {

    } else {
      this.setState({
        [name]: value
      });  
    }
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
      });
    } else {
      this.setState({
        statusMessage: "Please enter an author or title!"
      });
    }
  }

  handlePageClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render = () => {
    const { books, statusMessage, currentPage, booksPerPage } = this.state;
    const indexOfFinalMovie = currentPage * booksPerPage;
    const indexOfFirstMovie = indexOfFinalMovie - booksPerPage;

    return (
      <div className="container">
        <h2>Google Books API Search</h2>
        <Form 
          bookQuery={this.bookQuery}
          inputChange={this.handleInputChange}
          formSubmit={this.handleFormSubmit}
        />
        {
          books !== null && !books.length ? (
            <h2>{statusMessage}</h2>
          ) : (
            <Pagination 
              onPageSelect={selectedPage => this.setState({currentPage})}
              currentPage={currentPage}
              booksPerPage={booksPerPage}
              indexOfFinalMovie={indexOfFinalMovie}
              indexOfFirstMovie={indexOfFirstMovie}
              books={books}
              handlePageClick={this.handlePageClick}
            />
          )
        }
      </div>
    )
  }
}
