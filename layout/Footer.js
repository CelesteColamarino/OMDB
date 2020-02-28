import React from "react"

function Footer (){
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Desarrollado por:&nbsp;&nbsp;
            <span className="text-warning font-weight-normal">
              Celeste Colamarino
            </span>
            , Usando <i className="fab fa-react" /> React JS &amp; Redux JS
            integrado con la base de datos de películas de
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
