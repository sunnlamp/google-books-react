const API_KEY = process.env.REACT_APP_API_KEY;

export default {
  getBookData: function(query) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`)
  }
}