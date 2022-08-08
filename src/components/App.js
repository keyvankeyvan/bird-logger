import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Add from "./Add";
//import { birds as birdsArray } from "./counter";

function App() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/birds")
      .then((r) => r.json())
      .then((birds) => setBirds(birds));
  }, []);

  function addBird(birdObj) {
    //console.log(birdObj)
    setBirds([...birds, birdObj]);
  }
  //console.log(birds);

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
          <Add addBird={addBird} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
