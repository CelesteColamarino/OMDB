// container para basic components. Aca tambien tiene que crearse
// como un class based component.

import React, {Component} from "react";
import {connect} from "react-redux";

// importo el Search component para usarlo aca
import SearchForm from "./SearchForm";
import MoviesContainer from "./MoviesContainer";
import Spinner from "../layout/Spinner"


export class Landing extends Component{
  render(){
    const {loading}=this.props
    return(
      <div className="container">
      <SearchForm /> 
      {loading ? <Spinner /> : <MoviesContainer/>}
      </div>
    )
  }
}

const mapStateToProps=state=>({
  loading:state.movies.loading
})


export default connect(mapStateToProps) (Landing);
