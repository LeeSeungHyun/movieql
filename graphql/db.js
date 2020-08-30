// let movies = [
//   {
//     id: 0,
//     name: "Star wars - the new one",
//     score: 4
//   },
//   {
//     id: 1,
//     name: "Avengers - the new one",
//     score: 2
//   },
//   {
//     id: 2,
//     name: "Logan",
//     score: 3
//   }
// ];
import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `?limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  console.log(limit);
  console.log(rating);

  return fetch(`${REQUEST_URL}`) 
    .then(res => res.json())
    .then(json => json.data.movies);
}

// export const getMovies = () => movies;

// export const getById = id => {
//   const filteredPeople = movies.filter(movie => movie.id === id);
//   return filteredPeople[0];
// }

// export const deleteMovie = (id) =>  {
//   const cleanedMovies = movies.filter(movie => movie.id !== id)
//   if(movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// }

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: `${movies.length + 1}`,
//     name,
//     score
//   }
//   movies.push(newMovie);
//   return newMovie;
// }