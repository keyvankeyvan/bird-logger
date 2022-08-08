const birds = [
  {
    id: 1,
    date: "Jul, 2022",
    imageUrl: "../birdphotos/BaIb.jpg",
    notes: "Quite large and not timid. Bronx Zoo, Bronx.",
    species: "Bald Ibis",
  },
  {
    id: 2,
    date: "Jul, 2022",
    imageUrl: "../birdphotos/BeBa.jpg",
    notes: "Observed calling in unison with freind. Bronx Zoo, Bronx.",
    species: "Bearded Barbet",
  },
  {
    id: 3,
    date: "Jul, 2022",
    imageUrl: "../birdphotos/BlJa.jpg",
    notes: "Loud and hanging out with freinds. Astoria Park, Queens.",
    species: "Blue Jay",
  },
  {
    id: 4,
    date: "May, 2022",
    imageUrl: "../birdphotos/HoSp.jpg",
    notes: "Fledgling, parents nearby. Garden.",
    species: "House Sparrow",
  },
  {
    id: 5,
    date: "May, 2022",
    imageUrl: "../birdphotos/ReBiPa.jpg",
    notes: "Nice/curious sounding song. Central Park Zoo, Manhattan.",
    species: "Red Bird of Paradise",
  },
  {
    id: 6,
    date: "Jun, 2019",
    imageUrl: "../birdphotos/ReTeHa.jpg",
    notes:
      "Spotted feeding at nest on Unisphere. Flushing Meadows Corona Park, Queens",
    species: "Red Tailed Hawk",
  },
  {
    id: 7,
    date: "Jul, 2022",
    imageUrl: "../birdphotos/WhCrHoBi.jpg",
    notes: "Very regal. Bronx Zoo, Bronx.",
    species: "White Crown Horn Bill",
  },
  {
    id: 8,
    date: "May, 2022",
    imageUrl: "../birdphotos/WhFrBeEa.jpg",
    notes: "Optimal bee hunters. Central Park Zoo, Manhattan.",
    species: "White Front Bee Eater",
  },
  {
    id: 9,
    date: "Jan, 2020",
    imageUrl: "../birdphotos/YeCa.jpg",
    notes: "Name: Buki. Yellow bird who loves watercress.",
    species: "Yellow Canary",
  },
];

const getNextId = (
  (id) => () =>
    ++id
)(9);

export { birds, getNextId };