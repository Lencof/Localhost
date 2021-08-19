// __Author__ __Lencof__
// Medal_function.js

var medalForScore = function (score) {
  if (score < 3) {
     return "Bronze";
  }
  if (score < 7) {
     return "Silver";
 }
     return "Gold";
};

medalForScore("B")
// Bronze

medalForScore("S")
// Silver

medalForScore("G")
// Gold
