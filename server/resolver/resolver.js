const { books, authors } = require("../data/static");
const AuthorModel = require("../models/Author");
const BookModel = require("../models/Book");

const resolvers = {

  // Query
  Query: {
    books: async (parent, args, { mongoDBMethods }) => await mongoDBMethods.getAllBooks(),
    book: async (parent, {id}, {mongoDBMethods}) => await mongoDBMethods.getBookById(id),
    authors: async (parent, args, {mongoDBMethods}) => await mongoDBMethods.getAllAuthors(),
    author: async (parent, {id}, {mongoDBMethods}) => await mongoDBMethods.getAuthorById(id)
  },
  Book: {
    author: async ({authorId}, args, {mongoDBMethods}) =>
      await mongoDBMethods.getAuthorById(authorId)
  },
  Author: {
    books:async  ({id}, args, {mongoDBMethods}) =>
     await mongoDBMethods.getAllBooks({authorId: id}),
  },

  // Mutation
  Mutation: {
    createAuthor: async (parent, args, {mongoDBMethods}) => await mongoDBMethods.createAuthor(args),
    createBook: async (parent, args, {mongoDBMethods}) => await mongoDBMethods.createBook(args),
  },
};

module.exports = resolvers;
