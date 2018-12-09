import React,{Component} from "react";

class Titulos extends Component{
  constructor( ...args){
    super(...args)

  }
  render(){
    return(
      <div className="titulo col-12 col-xl-10 offset-xl-1 ">
            <h2 className="py-5 ">{this.props.title}</h2>
            <p className="textBody col-10 offset-1 col-lg-6 offset-lg-3 ">{this.props.text}</p>
        </div>
    );
  }
}
export default Titulos;
