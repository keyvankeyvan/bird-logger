import React from "react";
import BirdCard from "./BirdCard";

function Home({ birdList }) {
  //console.log(birdList);

  const birdCards = birdList.map((birdObj) => {
    //console.log(birdObj);
    return (
      <BirdCard
        key={birdObj.id}
        date={birdObj.date}
        imageUrl={birdObj.imageUrl}
        notes={birdObj.notes}
        species={birdObj.species}
      />
    );
  });

  return (
    <div id="home">
      <h1>Bird Lister</h1>
      <p>Welcome! Here is a list of birds that you have spotted:</p>
      <main>{birdCards}</main>
    </div>
  );
}

export default Home;
