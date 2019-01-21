import React, { Component } from 'react';

export default class BookSearch extends Component {
  state = {
    bookQuery: "",
    books: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
  }

  render = () => {
    var { books } = this.state;
    return (
      <div>
        <form>
          <label>Book Search</label>
          <input
            id={'searchInput'}
            placeholder='Enter title or author'
            value={this.state.bookQuery}
            onChange={this.handleInputChange}
          />
          <button
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
        </form>
        <div>
          {!this.state.books.length ? (
            <h1>No books to display, please enter an author or title.</h1>
          ) : (
              <ul>
                {this.state.recipes.map(book => {
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