import React, {Component} from 'react';
import {connect} from "react-redux";

import MovieCard from "./MovieCard"

export class MoviesContainer extends Component {
  render () {
    const {movies}=this.props;
    let content="";

    // aca a la variable content le asigno: si la longitud del movies (que es un arreglo de pelis), es mayor a cero, a cada uno
    // de sus indices lo muestro en una tarjeta, utilizando una funcion map que toma la pelicula y su indice, y las setea como la key
    // y la movie prop dentro de la tarjeta (la cual uso dps en el componente card).
    content=movies.length > 0 ? movies.map((movie,index) => <MovieCard key={index} movie={movie}/>) : null;
    return (
      <div className="row">
      {content}
      </div>
    )

  }
}

const mapStateToProps=state=>({
  movies:state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);
