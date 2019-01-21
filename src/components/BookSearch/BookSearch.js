import React, { Component } from 'react';

export default class BookSearch extends Component {
  state = {
    bookQuery: '',
    books: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render = () => {
    return (
      <div>
        <form>
          <input
            id={'searchInput'}
            placeholder='Enter title or author'
            value={this.state.bookQuery}
            onChange={this.handleInputChange}
          />
        </form>
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