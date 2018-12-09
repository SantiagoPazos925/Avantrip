import React, { Component } from 'react';

import Header from "./Header";
import Buscador from "./Buscador";
import Categorias from "./Categorias";
import Direccion from "./Direccion";

class Menu extends Component {
  constructor( ...args){
    super(...args)

  }

  render() {
    return (
      <div className="contenedor bg">
        <div className="content col-12 col-xl-10 offset-xl-1">
          <Categorias />
          <Direccion />
          <Header  />
          <Buscador />

        </div>
      </div>
    );
  }
}

export default Menu;
