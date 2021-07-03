import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import TiketPesawat from "./Pages/TiketPesawat";
import Hotel from "./Pages/Hotel";
import Kereta from "./Pages/Kereta";
import Delman from "./Pages/Delman";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tiket-pesawat">
          <TiketPesawat />
        </Route>
        <Route path="/tiket-kereta">
          <Kereta />
        </Route>
        <Route path="/hotel">
          <Hotel />
        </Route>
        <Route path="/delman">
          <Delman />
        </Route>
        {/* <PrivateRoute>
          <Route path ="/ramadhan">
            <Ramadhan />
          </Route>
        </PrivateRoute> */}
      </Switch>
    </Router>
  );
}

export default App;

/* class PrivateRoute extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
} */
