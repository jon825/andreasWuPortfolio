import React, { Component } from "react";
import Header from "./Header";
import Photography from "./Photography";
import Contact from "./Contact";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import "../App.css";




class App extends Component {
  constructor() {
    super();
    this.state = {
      loading:true
    };

    this.goToContact = this.goToContact.bind(this);
  }

  componentDidMount(){
    setTimeout(() =>{
      this.setState({
        loading:false
      }), 5000;
    })
  }

  goToContact(){
  console.log('clicked')

  }

  render() {
    const loading = this.state.loading;
    if(loading){
      return <div className="loader"></div>;
    }


    return (
      <div className="App container ">
        <Header />
        <div className="caption-style-1 row">
          <div className="hover-img col-lg-5 col-md-5 col-sm-5 nopadding"><Link to="/photography" id="links">
              <img
                src={require("../images/cap_A.png")}
                className="image"
              />
              <div className="overlay img-cap">
                <div className="text">Photography</div>
              </div>
              </Link>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2">
          </div>
          <div className="hover-img col-lg-5 col-md-5 col-sm-5 nopadding"><Link to="/filmography" id="links">
            <img
              src={require("../img/chaps_1x.jpg")}
              className="image"
            />
            <div className="overlay">
              <div className="text">Videography</div>
            </div>
            </Link>
            </div>
        </div>
        <br></br>

          <h4><Link to="/contact" id="links">CONTACT</Link></h4>

      </div>
    );
  }
}

export default App;
