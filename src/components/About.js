import React from "react";

function About() {
  return (
    <div id="about">
      <h1>About</h1>
      <p>
        Birding is the act of observing birds. This lister can serve as a log to
        document your sightings along with some notes.
      </p>
      <p>
        From{" "}
        <a href="https://ebird.org/pnw/news/birding-ethics-guidelines-for-respecting-birds-their-habitat-and-each-other">
          eBird
        </a>
        , some general birding guidelines incude:
      </p>
      <ul>
        <li>
          Be aware of sensitive and threatened species that might be vulnerable
          to disturbance.
        </li>
        <li>
          Stay at a distance where you are not agitating birds or modifying
          their behavior, especially near nests.
        </li>
        <li>
          Respect private property rights, only enter with express permission.
        </li>
        <li>
          Always be polite and courteous to non-birders you encounter, share
          your knowledge when appropriate.
        </li>
        <li>
          If birding with others, be respectful of the ability of all group
          members, be encouraging and share your knowledge with beginners.
        </li>
        <li>Stay on designated trails, do not trample vegetation.</li>
      </ul>
    </div>
  );
}

export default About;
