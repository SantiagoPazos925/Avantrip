import React, {Component} from "react";
import Menu from "./Menu";
import Header from "./Header";
import Buscador from "./Buscador";
import Categorias from "./Categorias";
import Direccion from "./Direccion";
import Footer from "./Footer";
import DerReservados from "./DerReservados";
import Titulos from "./Titulos";
import MultiCarouselPage from "./MultiCarouselPage";
import Graph from "./Graph.js";

class Avantrip extends Component {
  constructor( ...args){
    super(...args)
    this.state = {title: 'La Gran Manzana',title2:'Hoteles en Nueva York', text:'Wheter its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It´s also big tour business and the are many options. As you dream of that hot apple cider on a crisp afternoon do a quick check list before you leave home so you´re ready for any type of wather. If you´re prepared then all you need o do is focus on having a fun and relaxing time.'}

  }

  render() {
    return (
      <div className="backgroundColor">
        <Menu />
        <Graph />
        <Titulos text={this.state.text} title={this.state.title}/>
        <Titulos title={this.state.title2}/>
        <MultiCarouselPage />
        <Footer />
        <DerReservados />

      </div>
    );
  }
}

export default Avantrip;
