// class based component. usa states
import React, {Component} from "react";

// para usar un estado dentro de un componente cuando tengo redux,
// tengo que importar connect, lo cual me permite conectar mi componente con el
//estado de redux. Ir abajo!
import {connect} from "react-redux";

//importo searchMovie para usarlo en el evento on change.
import {searchMovie, fetchMovies} from "../../actions/searchActions"

export class SearchForm extends Component{


//la funcion onChange toma un evento como parametro. Dentro de ese evento
// tengo un value, que es el texto que escribe la persona
  onChange=e=>{
      this.props.searchMovie(e.target.value)
  }

  onSubmit=e=>{
    e.preventDefault();
    this.props.fetchMovies(this.props.text)
  }

  render(){
    return(
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Buscá Películas y Series
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Escribí el nombre de la película o serie que querés buscar ..."
              // esto de abajo activa una funcion de este mismo componente, descripta arriba.
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Buscar
            </button>
          </form>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  text: state.movies.text
})


// const mapDispatchToProps = dispatch =>(
//   return {
//     searchMovie: () => dispatch()
//   }
// )


// cuando uso el metodo connect, en el primer parametro pongo el metodo
// que uso para mapear los ***, y el segundo parametro tiene las funciones o
// actions q usa mi componente. (en este caso searchMovie). Esto lo que hace es
// desestructurar
export default connect (
  mapStateToProps,
  {searchMovie, fetchMovies}
) (SearchForm);
