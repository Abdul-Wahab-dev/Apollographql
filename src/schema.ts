export const typeDefs = `#graphql  

type Book {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }

type Category{
  id: ID!,
  name: String!
  books(filter: booksFilters): [Book!]!
}

type Query {
  books(filter: booksFilters): [Book!]!
  book(id: ID!): Book
  categories: [Category]
  category(id: ID!): Category      
}

type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

input booksFilters {
  onSale: Boolean
}
`;
