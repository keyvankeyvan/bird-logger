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

      <p>
        <b>Spotted on: </b>
        {date}
      </p>
      <p>
        <b>Notes: </b>
        {notes}
      </p>
    </div>
  );
}

export default BirdCard;
