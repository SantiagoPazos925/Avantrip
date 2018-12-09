import React,{Component} from "react";

class Direccion extends Component{
  constructor( ...args){
    super(...args)
    this.state = {mensaje: 'Home > Destinos > Estados Unidos > '}
  }
  render(){
    return(
      <div className="direccion">
        <span className="dirViaje">{this.state.mensaje}</span><span className="dirCiudad">Nueva York</span>

      </div>
    );
  }
}
export default Direccion;
