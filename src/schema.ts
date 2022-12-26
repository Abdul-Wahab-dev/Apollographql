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

type Mutation {
  addCategory(input:addCategoryInput): Category
  addBook(input:addBookInput): Book
  addReview(input:addReviewInput): Review
  deleteCategory(id: ID!): Boolean!
  deleteBook(id: ID!): Boolean!
  deleteReview(id: ID!): Boolean!
  updateCategory(id: ID!, input: UpdateCategoryInput!): Category
  updateBook(id: ID!, input: UpdateBookInput!): Book
  updateReview(id: ID!, input: UpdateReviewInput!): Review
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

input addCategoryInput {
  name: String
}
input addBookInput {
  id: ID!
  name: String!
  description: String!
  quantity: Int!
  image: String!
  price: Float!
  onSale: Boolean!
  cateId: String!
}
input addReviewInput {
  id: ID!
  date: String!
  title: String!
  comment: String!
  rating: Int!
  bookId: String!
}
input UpdateCategoryInput {
    name: String!
  }
input UpdateBookInput {
  name: String!
  description: String!
  quantity: Int!
  image: String!
  price: Float!
  onSale: Boolean!
  cateId: String
}  
input UpdateReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    bookId: ID!
  }
`;
