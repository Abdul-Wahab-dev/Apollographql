import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import { resolvers } from "./resolver/index.js";
import { books, categories, reviews } from "./db.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => {
    return {
      books,
      categories,
      reviews,
    };
  },
  listen: {
    port: 4000,
  },
});

console.log(`server  ready at ${url}`);
