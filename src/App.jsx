import React from "react";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Catering from "./Catering";
import Locations from "./Locations";
import Contact from "./Contact";
import Ordernow from "./Ordernow";
import { Switch,Route } from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={Aboutus}/>
      <Route exact path="/catering" component={Catering}/>
      <Route exact path="/locations" component={Locations}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/order" component={Ordernow}/>
      <Route component={Home}/>
    </Switch>
    
    </>
  );
}

export default App;
