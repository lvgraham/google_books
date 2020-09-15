import axios from "axios";

export default {
  // Gets all books
  searchTitle: function(query) {
    return axios.get(`/api/books/search/${query}`);
  },
  // Gets the book with the given id
  loadSavedBooks: function(id) {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
