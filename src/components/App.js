import React, { Component } from "react";
import Header from "./Header";
import Photography from "./Photography";
import Contact from "./Contact";
import "../App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hover:false
    }

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);

  }


  mouseOver(){
    this.setState({
      hover:true
      })
  }

  mouseOut(){
    this.setState({
      hover:false
    })
  }


  render() {
    if(this.state.hover != true){
      console.log('false')
    } else{
      console.log('true')
    }

    return (
      <div className="container App">
        <Header />
        <div className="row content">
          <div className="col-md-6 col-sm-6 blur" id="photography">
            <div className="container-a1">
              <ul className="caption-style-1">
                <img src={require('../images/ant_man.png')}  onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} />
                <div className={this.state.hover ? "caption" : "caption-hidden"}>

                      <h1>Photography</h1>


                </div>
              </ul>
            </div>
          </div>

        </div>

        <h4>CONTACT</h4>



      </div>
    );
  }
}

export default App;
