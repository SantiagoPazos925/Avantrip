import React, {Component} from "react";

class Header extends Component{
  render(){
    return(
      <div className="col-12  col-xl-6 offset-xl-3 title">
        <h6>Escapate a</h6>
        <h1 className="ciudad  ">Nueva York</h1>
        <ul className="row tipoViaje justify-content-center  ">
          <li className="col-6 col-md-4 col-lg-5 ">IDA Y VUELTA</li>
          <li className="col-4 col-md-4 col-lg-4">SOLO IDA</li>
          <li className="col-2 col-md-4 col-lg-3">MULTIDESTINO</li>
        </ul>
      </div>
    )
  }
}

export default Header;
