import React, {Component} from "react";

class Buscador extends Component{

  render(){
    return(
      <div className="row infoPasaje justify-content-center ">
        <div className="info info1 col-lg-3 py-3 ">
          <h6>ORIGEN</h6>
          <h5>Buenos Aires(EZE)</h5>
        </div>
        <div className="info col-lg-3 py-3 ">
          <h6>DESTINO</h6>
          <h5>New York(JFX)</h5>
        </div>
        <div className="info col-lg-3 py-3">
          <h6>FECHAS</h6>
          <h5>Mar 22 Oct-Vie 31 Nov</h5>
        </div>
        <div className="info col-lg-2 py-3">
          <h6>PASAJEROS Y CLASE</h6>
          <h5>2 Pasajeros, Económica</h5>
        </div>
        <a href="" className="iconSearch col-sm-12 col-lg-1 ">
          <span className="col-8 search">Buscar</span>

          <i  className="col-sm-2 ion-ios-search-strong"></i>
        </a>


      </div>
    )
  }
}

export default Buscador;
