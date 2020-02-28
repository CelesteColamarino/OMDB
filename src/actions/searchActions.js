//cada accion es una funcion

import {SEARCH_MOVIE} from "./types";
import {FETCH_MOVIES} from "./types";
import {FETCH_MOVIE} from "./types";
import axios from "axios";
import {APIKey} from "../APIKey";
//exporto la funcion que va a ejecutarse sobre el tipo searchmovie
// el dispatch viene del redux thunk
export const searchMovie = text => dispatch => {
  dispatch({
    type:SEARCH_MOVIE,
    payload:text
  })
}

// sin arrow function seria asi:

// var searchMovie = function searchMovie(text) {
//   return function (dispatch) {
//     dispatch({
//       type: SEARCH_MOVIE,
//       payload: text
//     });
//   };
// };

//Ahora necesito un Action que luego del search, agarre la pelicula que responda
// a los parametros y la devuelva (fetch)

export const fetchMovies = text => dispatch =>{
  axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response=>dispatch({
      type:FETCH_MOVIES,
// si quiero que me devuelva toooda la data, uso response.data, pero Como
// la data tiene una parte search que me devuelve todas las pelis, uso ese.
//payload:response.data:
      payload:response.data.Search
    }))
    .catch(err => console.log(err))
}

export const fetchMovie= id => dispatch =>{
  axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${id}`)
    .then(response=>
      dispatch({
        type:FETCH_MOVIE,
        payload:response.data
    }))
    .catch(err => console.log(err))
}
