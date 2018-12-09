import React, {Component} from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
class Categorias extends Component{
  render(){
    return(
      <div className="" >
      <nav className="navbar navbar-expand-lg ">
        <div className="col-sm-6 col-lg-1">
        <a href="" className="logo" href="#">AVANTRIP</a>
        </div>
        <div className="col-sm-4 col-lg-1  text-right pr-0  ">
          <MDBDropdown >
          <MDBDropdownToggle caret className="dropdownMenu" >
            <i class="fa fa-bars" aria-hidden="true"></i>
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
          <MDBDropdownItem header>Mi Perfil</MDBDropdownItem>
          <MDBDropdownItem>Vuelos</MDBDropdownItem>
          <MDBDropdownItem>Hoteles</MDBDropdownItem>
          <MDBDropdownItem>Paquetes</MDBDropdownItem>
          <MDBDropdownItem>Autos</MDBDropdownItem>

          </MDBDropdownMenu>
        </MDBDropdown>
        </div>
        <button className="navbar-toggler  col-lg-10" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarText">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item navegador active px-3 ">
              <a href="" className="nav-link navegador " href="/vuelos">Vuelos <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item px-3 cat ">
              <a href="" className="nav-link navegador" href="/hoteles">Hoteles</a>
            </li>
            <li className="nav-item  px-3 cat">
              <a href="" className="nav-link navegador" href="/paquetes">Paquetes</a>
            </li>
            <li className="nav-item px-3 cat">
              <a href="" className="nav-link navegador" href="/autos">Autos</a>
            </li>
            <li className="nav-item navegador px-3 cat">
            <div className="dropdown">
              <a href="" className="nav-link dropdown-toggle navegador" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                más
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a href="" className="dropdown-item" href="#">Cat1</a>
                <a href="" className="dropdown-item" href="#">Cat2</a>
                <a href="" className="dropdown-item" href="#">Cat3</a>
              </div>
              </div>
            </li>
          </ul>
          <span className="navbar-text navegador">
            <a href="" className="dropdown-toggle navegador">Bienvenido, <span className="user">Alejandro Altamirano </span></a>
          </span>
        </div>
        </nav>

      </div>
    )
  }
}

export default Categorias;
