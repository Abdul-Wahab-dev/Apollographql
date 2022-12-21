"use strict";
exports.__esModule = true;
var server_1 = require("@apollo/server");
var standalone_1 = require("@apollo/server/standalone");
var books = [
    {
        id: "1",
        title: "The Awakening",
        author: "Kate Chopin",
        price: 1200.0,
        onSale: false
    },
    {
        id: "2",
        title: "City of Glass",
        author: "Paul Auster",
        price: 1300.0,
        onSale: true
    },
];
var categories = [
    {
        id: "1",
        name: "action"
    },
    {
        id: "2",
        name: "fantacy"
    },
    {
        id: "3",
        name: "horror"
    },
];
var resolvers = {
    Query: {
        books: function () { return books; },
        book: function (parent, args, context) {
            var id = args.id;
            return books.find(function (book) { return book.id === id; });
        },
        categories: function () { return categories; },
        category: function (parent, args, context) {
            var id = args.id;
            console.log("query run " + id);
            return categories.find(function (categ) { return categ.id === id; });
        }
    }
};
var typeDefs = "#graphql  \n\n    type Book {\n      id: ID!,\n      title: String,\n      author: String,\n      price: Int,\n      onSale: Boolean\n    }\n\n    type Category{\n      id: ID!,\n      name: String!\n    }\n\n    type Query {\n      books: [Book]\n      book(id: ID!): Book\n      categories: [Category]\n      category(id: ID!): Category      \n    }\n";
var server = new server_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
var url = (await (0, standalone_1.startStandaloneServer)(server, {
    listen: {
        port: 4000
    }
})).url;
console.log("server  ready at ".concat(url));
