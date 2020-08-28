import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// Graphql 서버 생성
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

// Graphql 서버 시작
server.start(() => console.log("Graphql Server Running"));