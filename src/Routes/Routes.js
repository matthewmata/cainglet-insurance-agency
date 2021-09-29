import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ContactUs from "../Pages/Contact-Us";
import EspanolContactUs from "../Pages/Espanol-Contact-Us";
import Auto from "../Pages/Auto-Insurance";
import HomeOwners from "../Pages/Homeowners-Insurance";
import Commerical from "../Pages/Commerical-Insurance";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      scroll: window.scrollY,
    };
    this.handleWidth = this.handleWidth.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWidth);
    window.addEventListener("scroll", this.handleScroll);
  }

  handleWidth() {
    this.setState({ width: window.innerWidth });
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home width={this.state.width} />}
          />
          <Route
            path="/about"
            render={() => <About width={this.state.width} />}
          />
          <Route
            path="/contact-us"
            render={() => <ContactUs width={this.state.width} />}
          />
          <Route
            path="/espanol-contact-us"
            render={() => <EspanolContactUs width={this.state.width} />}
          />
          <Route
            path="/quote/auto-insurance"
            render={() => <Auto width={this.state.width} />}
          />
          <Route
            path="/quote/homeowners-insurance"
            render={() => <HomeOwners width={this.state.width} />}
          />
          <Route
            path="/quote/commerical"
            render={() => <Commerical width={this.state.width} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
