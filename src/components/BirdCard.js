import React from "react";

function BirdCard({
  date,
  imageUrl = "https://flyclipart.com/thumb2/free-bird-silhouette-clip-art-307740.png",
  notes,
  species,
}) {
  return (
    <div className="card">
      <h2>{species}</h2>
      <img src={imageUrl} alt={species} />

      <h3>Spotted on: {date}</h3>
      <h3>Notes: {notes}</h3>
    </div>
  );
}

export default BirdCard;

//{isAdopted ? null : <button>Adopt</button>}
//<img src={imageUrl} alt={species} />
