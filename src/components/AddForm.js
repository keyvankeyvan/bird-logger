import React, { useState } from "react";

function AddForm({ addBird, birdLen }) {
  const [species, setSpecies] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  console.log(birdLen);
  birdLen = birdLen + 1;

  function handleSubmit(event) {
    event.preventDefault();
    const newBird = {
      id: birdLen,
      date,
      imageUrl,
      notes,
      species,
    };

    addBird(newBird);
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Species </label>
        <input
          type="text"
          id="species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
        <br />
        <label htmlFor="name">Date </label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <label htmlFor="name">Notes </label>
        <input
          type="text"
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <br />
        <label htmlFor="image">Image URL </label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <br />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}

export default AddForm;
