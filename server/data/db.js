const Book = require("../models/Book");
const Author = require("../models/Author");

const mongoDBMethods = {
  getAllBooks: async (condition = null) => condition === null ? await Book.find() : await Book.find(condition) ,
  getBookById: async id => await Book.findById(id), 
  getAllAuthors: async () => await Author.find(),
  getAuthorById: async id => await Author.findById(id),
  createAuthor: async (args) => {
    const newAuthor = new Author(args)
    return await newAuthor.save()
  },
  createBook: async (args) => {
    const newBook = new Book(args);
    return newBook.save();
  },
};

module.exports = mongoDBMethods;
