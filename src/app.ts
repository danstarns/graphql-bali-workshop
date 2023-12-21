import { createYoga } from "graphql-yoga";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createServer } from "http";

const typeDefs = `
    type Query {
        hello(name: String): String!
    }
`;

const resolvers = {
  Query: {
    hello: (_: any, { name }: any) => `Hello ${name || "World"}`,
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
