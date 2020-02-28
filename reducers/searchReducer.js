// 1. importo el tipo de Action
import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE} from "../actions/types";

//2. creo el estado inicital

const initialState={
  text:"",
  movies:[],
  loading:false,
  movie:[]

}

export default function(state=initialState, action){
  switch(action.type){
    case SEARCH_MOVIE:
      return{
        ...state,
        text:action.payload,
        loading:false
      };
    case FETCH_MOVIES:
      return{
        ...state,
        movies:action.payload,
      };
    case FETCH_MOVIE:
      return{
        ...state,
        movies:action.payload,
      };
    default:
      return state
  }
}
