// const nicolas = {
//   name: "Nicolas",
//   age: 18,
//   gender: "female"
// }
import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating)
  }
};

export default resolvers;