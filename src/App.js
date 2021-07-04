import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Pesawat from "./Pages/Pesawat";
// import ResPesawat from "./Pages/ResPesawat";
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
          <Pesawat />
        </Route>
        {/* {<Route path="/pesawat-tersedia">
          <ResPesawat />
        </Route>} */}
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
