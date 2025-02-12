import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      {<NavBar />}
      {
        <Switch>
          {/* Add Routes for each page */}
          <Route path="/movies" component={Movies} />
          <Route path="/directors" component={Directors} />
          <Route path="/actors" component={Actors} />
          <Route path="/" component={Home} />
        </Switch>
        /*{code here}*/
      }
    </div>
  );
}

export default App;
