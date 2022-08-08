import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">"will be about"</Route>
        <Route path="/Add">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
