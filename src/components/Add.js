import React from "react";
import AddForm from "./AddForm";

function Add() {
  return (
    <div id="home">
      <h1>Add a Bird</h1>
      <p>
        Feel free to use the form below to add a bird that you have observed!
      </p>
      <AddForm />
      <p>
        Need help identifying a bird?
        <a href="https://merlin.allaboutbirds.org/">Merlin</a> is a tool made by
        the Cornell Lab of Ornithology that you can use to ID birds using a
        picture, audio recording, or general description.
      </p>
    </div>
  );
}

export default Add;
