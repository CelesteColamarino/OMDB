// function based component! para que cuando se estan buscando las peliculas me aparezca
// un iconito.

import React from "react";
import spinner from "./spinner.gif"


function Spinner (){
  return(
    <div>
      // cuando le doy estilo a un componente, tengo que usar {} como si fuera un objeto.
      <img
        src={spinner}
        style={{width:"200px", margin:"auto", display:"block"}}
        alt="Buscando..."
      />
    </div>
  )
}

export default Spinner
