export default {
  getBookData: function(query) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${21}`)
  }
}