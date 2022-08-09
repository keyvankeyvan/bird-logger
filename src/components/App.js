import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Add from "./Add";

function App() {
  const [birds, setBirds] = useState([]);
  const birdArrLen = birds.length;

  useEffect(() => {
    fetch("http://localhost:4000/birds")
      .then((r) => r.json())
      .then((birds) => setBirds(birds));
  }, []);

  function addBird(birdObj) {
    fetch("http://localhost:4000/birds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(birdObj),
    }).then((r) => r.json());

    setBirds([...birds, birdObj]);
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home birdList={birds} />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Add">
          <Add addBird={addBird} birdLen={birdArrLen} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
