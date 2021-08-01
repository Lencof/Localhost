// __Author__ __Lencof__
// Movies.js

var movies = {
  "Finding Nemo": {
  releaseDate: 2003,
  duration: 100,
  actors: ["Albert Brooks", "Ellen DeGeneres", 
  "Alexander Gould"],
  format: "DVD"
  },
  "Star Wars Episode VI: Return of the Jedi": {
  releaseDate: 1983,
  duration: 134,
  actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
  format: "DVD"
  },
  "Harry Potter and the Goblet of Fire": {
  releaseDate: 2005,
  duration: 157,
  actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
  format: "Blu-ray"
  }
};

var findingNemo = movies["Finding Nemo"];
findingNemo.duration;
100
findingNemo.format;
"DVD"
