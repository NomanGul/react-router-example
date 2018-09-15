import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Route exact path="/react-router-example/" component={Home} />
              <Route path="/react-router-example/about" component={About} />
              <Route path="/react-router-example/contact" component={Contact} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
