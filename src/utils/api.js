require('dotenv').config();
const API_KEY = 'AIzaSyADX-U9peAlDexET8i6qSyO3kIUm1_Tz-c';

export default {
  getBookData: function(query) {
    console.log(API_KEY);
    
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`)
  }
}